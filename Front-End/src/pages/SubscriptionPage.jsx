import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubscriptionPaymentForm from "../Components/Payment Form/SubscriptionPaymentForm";
import "./Styles/SubscriptionPage.css";

const API_BASE = "http://localhost:5005/api"; // 🔁 change to your backend URL

function SubscriptionPage() {
  const [plans, setPlans] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // ─── 1. Fetch plans from backend ──────────────────────────────────────────
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`${API_BASE}/subscription/plans`);
        if (!res.ok) throw new Error("Failed to load plans");
        const data = await res.json();
        setPlans(data);
      } catch (err) {
        setError("Could not load subscription plans. Please try again.");
      } finally {
        setLoadingPlans(false);
      }
    };
    fetchPlans();
  }, []);

  const handlePlanSelect = (plan) => setSelectedPlan(plan);

  const handleSubscribe = () => {
    if (!selectedPlan) {
      alert("Please select a plan first");
      return;
    }
    setShowPayment(true);
  };

  // ─── 2. On payment confirm → POST to backend + save to localStorage ───────
  const handlePaymentConfirm = async (paymentMethod) => {
    setSubmitting(true);
    setError(null);

    // Get userId from wherever you store auth (adjust key as needed)
    const userId = localStorage.getItem("userId");

    const subscriptionRequest = {
      userId,                    // Guid — matches your SubscriptionRequest DTO
      planId: selectedPlan.planId,
    };

    try {
      const res = await fetch(`${API_BASE}/subscription/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subscriptionRequest),
      });

      if (res.status === 409) {
        throw new Error("You already have an active subscription.");
      }
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.message || "Registration failed.");
      }

      const result = await res.json(); // SubscriptionResponse from your API

      // ── Save to localStorage ────────────────────────────────────────────
      localStorage.setItem("isSubscribed", "true");
      localStorage.setItem("subscriptionPlan", JSON.stringify(selectedPlan));
      localStorage.setItem("subscriptionData", JSON.stringify(result));
      localStorage.setItem("subscriptionDate", new Date().toISOString());

      navigate("/subscription/status");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // ─── Helpers ──────────────────────────────────────────────────────────────
  const formatDuration = (duration) => {
    // duration from DB is like "30 Day", "90 Day", "365 Day"
    if (!duration) return "";
    const days = parseInt(duration);
    if (days >= 365) return "/ year";
    if (days >= 90) return "/ 3 months";
    return "/ month";
  };

  const popularPlanId = plans.length > 1 ? plans[1]?.planId : null; // Mark 2nd plan as popular

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
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

          {submitting && (
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
  );
}

export default SubscriptionPage;