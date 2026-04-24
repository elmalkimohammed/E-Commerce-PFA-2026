import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SubscriptionPaymentForm from "../Components/Payment Form/SubscriptionPaymentForm"
import TopNav from "../Components/navbarComponent/TopNav"
import "./Styles/SubscriptionPage.css"

const API_BASE = "http://localhost:5005/api"

// ── Same JWT decoder as PaymentForm ──────────────────────────────────────────
const decodeJWT = (token) => {
    try {
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        const jsonPayload = decodeURIComponent(
            atob(base64).split('').map(c =>
                '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            ).join('')
        )
        return JSON.parse(jsonPayload)
    } catch (error) {
        console.error('Error decoding JWT:', error)
        return null
    }
}

function SubscriptionPage() {

    const navigate = useNavigate()

    const [plans,        setPlans]        = useState([])
    const [loadingPlans, setLoadingPlans] = useState(true)
    const [selectedPlan, setSelectedPlan] = useState(null)
    const [showPayment,  setShowPayment]  = useState(false)
    const [loading,      setLoading]      = useState(false)
    const [error,        setError]        = useState(null)
    const [success,      setSuccess]      = useState(false)
    const [userId,       setUserId]       = useState(null)

    // ── 1. Verify JWT on mount — same pattern as PaymentForm ─────────────────
    useEffect(() => {
        const token = localStorage.getItem("generatedJWT_Token")

        if (!token) {
            setError("Token non trouvé. Veuillez vous reconnecter.")
            navigate("/Authentication")
            return
        }

        const decodedToken = decodeJWT(token)

        if (!decodedToken || !decodedToken.sub) {
            setError("Token invalide. Pas d'ID utilisateur trouvé.")
            navigate("/login")
            return
        }

        setUserId(decodedToken.sub)
    }, [])

    // ── 2. Fetch plans from backend ───────────────────────────────────────────
    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const res = await fetch(`${API_BASE}/subscription/plans`)
                if (!res.ok) throw new Error("Failed to load plans")
                const data = await res.json()
                setPlans(data)
            } catch (err) {
                setError("Could not load subscription plans. Please try again.")
            } finally {
                setLoadingPlans(false)
            }
        }
        fetchPlans()
    }, [])

    const handlePlanSelect = (plan) => setSelectedPlan(plan)

    const handleSubscribe = () => {
        if (!selectedPlan) {
            alert("Please select a plan first")
            return
        }
        // ── Save chosen plan to localStorage before payment ───────────────
        localStorage.setItem("subscriptionPlan", JSON.stringify(selectedPlan))
        setShowPayment(true)
    }

    // ── 3. Called by SubscriptionPaymentForm on submit ────────────────────────
    const handlePaymentConfirm = async (formData) => {
        setLoading(true)
        setError(null)

        try {
            const token = localStorage.getItem("generatedJWT_Token")

            if (!token) {
                setError("Token non trouvé. Veuillez vous reconnecter.")
                setLoading(false)
                return
            }

            const decodedToken = decodeJWT(token)

            if (!decodedToken || !decodedToken.sub) {
                setError("Token invalide. Pas d'ID utilisateur trouvé.")
                setLoading(false)
                return
            }

            const requestBody = {
                userId: decodedToken.sub,    // from JWT — matches your Guid UserId
                planId: selectedPlan.planId  // from selected plan
            }

            console.log("Sending subscription request:", JSON.stringify(requestBody, null, 2))

            const response = await fetch(`${API_BASE}/subscription/register`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            })

            if (response.status === 409) {
                throw new Error("Vous avez déjà un abonnement actif.")
            }
            if (response.status === 404) {
                throw new Error("Plan introuvable.")
            }
            if (!response.ok) {
                const body = await response.json()
                throw new Error(body.message || "Erreur lors de l'inscription.")
            }

            const result = await response.json()

            console.log("Subscription response:", result)

            // ── Save everything to localStorage ──────────────────────────
            localStorage.setItem("isSubscribed",      "true")
            localStorage.setItem("subscriptionData",  JSON.stringify(result))
            localStorage.setItem("subscriptionDate",  new Date().toISOString())
            // subscriptionPlan already saved in handleSubscribe

            setSuccess(true)
            setTimeout(() => navigate("/subscription/status"), 2000)

        } catch (err) {
            console.error("Subscription error:", err)
            throw err // re-throw so SubscriptionPaymentForm catches it and shows the error
        } finally {
            setLoading(false)
        }
    }

    // ── Helpers ───────────────────────────────────────────────────────────────
    const formatDuration = (duration) => {
        if (!duration) return ""
        const days = parseInt(duration)
        if (days >= 365) return "/ year"
        if (days >= 90)  return "/ 3 months"
        return "/ month"
    }

    const popularPlanId = plans.length > 1 ? plans[1]?.planId : null

    // ── Success screen ────────────────────────────────────────────────────────
    if (success) {
        return (
            <>
                <TopNav />
                <div className="sub-page">
                    <div className="containerBox">
                        <div className="header">
                            <h1>✅ Abonnement activé avec succès !</h1>
                            <p>Vous allez être redirigé...</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    // ── Main render ───────────────────────────────────────────────────────────
    return (
        <>
            <TopNav />
            <div className="sub-page">
                <div className="sub-header">
                    <h1>Choose Your Seller Plan</h1>
                    <p>Start selling your products on TechStore</p>
                </div>

                {error && <div className="sub-error">{error}</div>}

                {!showPayment ? (
                    <>
                        {loadingPlans ? (
                            <div className="sub-loading">
                                <div className="spinner" />
                                <p>Loading plans…</p>
                            </div>
                        ) : (
                            <div className="plans-container">
                                {plans.map((plan) => (
                                    <div
                                        key={plan.planId}
                                        className={`plan-card
                                            ${selectedPlan?.planId === plan.planId ? "selected" : ""}
                                            ${plan.planId === popularPlanId ? "popular" : ""}
                                        `}
                                        onClick={() => handlePlanSelect(plan)}
                                    >
                                        {plan.planId === popularPlanId && (
                                            <div className="popular-badge">Most Popular</div>
                                        )}
                                        <h3 className="plan-name">{plan.name}</h3>
                                        <div className="plan-price">
                                            <span className="currency">$</span>
                                            <span className="price">{plan.price}</span>
                                            <span className="period">{formatDuration(plan.duration)}</span>
                                        </div>
                                        <ul className="plan-features">
                                            <li>
                                                <i className="bi bi-check-circle-fill" />
                                                <span>Up to <strong>{plan.maxProducts}</strong> products</span>
                                            </li>
                                            <li>
                                                <i className="bi bi-check-circle-fill" />
                                                <span>{plan.duration} access</span>
                                            </li>
                                            <li>
                                                <i className="bi bi-check-circle-fill" />
                                                <span>Full seller dashboard</span>
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="subscription-action">
                            <button
                                className={`subscribe-btn ${!selectedPlan ? "disabled" : ""}`}
                                onClick={handleSubscribe}
                                disabled={!selectedPlan || loadingPlans}
                            >
                                Continue with {selectedPlan?.name || "a Plan"}
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="payment-section">
                        <h2>Complete Payment</h2>
                        <div className="payment-summary">
                            <h3>Selected Plan: {selectedPlan?.name}</h3>
                            <p className="total-amount">
                                Total: ${selectedPlan?.price} {formatDuration(selectedPlan?.duration)}
                            </p>
                        </div>

                        {loading && (
                            <div className="sub-loading">
                                <div className="spinner" />
                                <p>Processing your subscription…</p>
                            </div>
                        )}

                        <SubscriptionPaymentForm onConfirm={handlePaymentConfirm} />

                        <button className="back-btn" onClick={() => setShowPayment(false)}>
                            ← Back to plans
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default SubscriptionPage