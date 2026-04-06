import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Cookies from "js-cookie"

import { orderAPI } from "../../services/servicesAPI"
import "../styles/paymentForm.css"

function PaymentForm() {

    const navigate = useNavigate()

    const [cartItems, setCartItems] = useState([])
    const [loading,   setLoading]   = useState(false)
    const [error,     setError]     = useState(null)
    const [success,   setSuccess]   = useState(false)

    /* ── Champs du formulaire (même champs que tu avais) ── */
    const [formData, setFormData] = useState({
        cardName:  "",
        cardNum:   "",
        phoneNum:  "",
        expDate:   "",
        natId:     "",
        address:   "",
        city:      "",
        country:   ""
    })

    /* ── Récupérer le panier depuis le cookie ── */
    useEffect(() => {
        const cookie = Cookies.get("pendingCart")
        if (cookie) {
            setCartItems(JSON.parse(cookie))
        } else {
            // Pas de panier → retour au cart
            navigate("/cart")
        }
    }, [])

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    /* ── Calcul total ── */
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity, 0
    )

    /* ── Annuler La Commande ── */
    const handleAnnuler = () => {
        Cookies.remove("pendingCart")
        navigate("/cart")
    }

    /* ── Valider La Commande ── */

    // Helper Function For Decoding JWTs
    const decodeJWT = (token) => {
        try {
            const base64Url = token.split('.')[1]
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            }).join(''))
            
            return JSON.parse(jsonPayload)
        } catch (error) {
            console.error('Error decoding JWT:', error)
            return null
        }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     setLoading(true)
    //     setError(null)

    //     try {
    //         const token  = localStorage.getItem("generatedJWT_Token")
    //         const userId = decodeJWT(token).sub
    //         console.log(userId)

    //         const config = {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "application/json"
    //             }
    //         }

    //         /* ── Body pour POST /api/orders/cart ── */
    //         const orderDto = {
    //             UserId: userId,
    //             Items: cartItems.map(item => ({
    //                 ProductId: item.productId,
    //                 ProductName: item.productName,
    //                 Quantity:  item.quantity,
    //                 UnitPrice: item.price
    //             }))
    //         }

    //         await axios.post(`${orderAPI}/cart`, orderDto, config)

    //         /* ── Succès → nettoyer le cookie ── */
    //         Cookies.remove("pendingCart")
    //         setSuccess(true)

    //         /* ── Rediriger après 2 secondes ── */
    //         setTimeout(() => navigate("/"), 2000)

    //     } catch (err) {
    //         setError("Une erreur est survenue. Veuillez réessayer.")
    //         console.error(err)
    //     } finally {
    //         setLoading(false)
    //     }
    // }
    const handleSubmit = async (e) => {
    e.preventDefault()
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
        
        const userId = decodedToken.sub
        
        if (!cartItems || cartItems.length === 0) {
            setError("Panier vide")
            setLoading(false)
            return
        }

        // IMPORTANT: Use the EXACT format that works in your .http test
        const requestBody = {
            userId: userId,                    // camelCase - NOT UserId
            items: cartItems.map(item => ({    // camelCase - NOT Items
                productId: item.productId,     // camelCase - NOT ProductId
                productName: item.productName, // camelCase - NOT ProductName
                quantity: Number(item.quantity),
                unitPrice: Number(item.price)  // camelCase - NOT UnitPrice
            }))
        }

        console.log("Sending request body:", JSON.stringify(requestBody, null, 2))

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }

        // NO 'dto' wrapper - send directly
        const response = await axios.post(`${orderAPI}/cart`, requestBody, config)
        
        console.log("Response:", response.data)

        Cookies.remove("pendingCart")
        setSuccess(true)
        setTimeout(() => navigate("/"), 2000)

    } catch (err) {
        console.error("Error response:", err.response?.data)
        
        if (err.response?.data?.errors) {
            const errorMessages = Object.entries(err.response.data.errors)
                .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`)
                .join('; ')
            setError(`Erreur de validation: ${errorMessages}`)
        } else if (err.response?.data?.message) {
            setError(`Erreur: ${err.response.data.message}`)
        } else {
            setError("Une erreur est survenue. Veuillez réessayer.")
        }
    } finally {
        setLoading(false)
    }
}

    /* ── Succès ── */
    if (success) {
        return (
            <div className="containerBox">
                <div className="header">
                    <h1>✅ Commande passée avec succès !</h1>
                    <p>Vous allez être redirigé vers l'accueil...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="containerBox">
            <div className="header">
                <h1>Validation du paiement</h1>
                <p>Valider votre commande après le remplissage de ces informations</p>
            </div>

            {/* ── Résumé du panier ── */}
            <div className="cartSummary" style={{ marginBottom: "1em", background: "#f5f5f5", padding: "1em", borderRadius: "8px" }}>
                <h3>Résumé de la commande</h3>
                {cartItems.map((item, index) => (
                    <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>{item.productName} x{item.quantity}</span>
                        <span>{(item.price * item.quantity).toFixed(2)} MAD</span>
                    </div>
                ))}
                <hr />
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                    <span>Total</span>
                    <span>{totalPrice.toFixed(2)} MAD</span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="payForm">
                <div>
                    <label htmlFor="cardName">Nom du carte: </label>
                    <input
                        id="cardName"
                        name="cardName"
                        type="text"
                        placeholder="Taper le nom du votre cart"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="cardNum">Code postal: </label>
                    <input
                        id="cardNum"
                        name="cardNum"
                        type="text"
                        maxLength="5"
                        pattern="\d{5}"
                        placeholder="Taper le code postal de votre cart (doit étre 5 chiffres)"
                        value={formData.cardNum}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phoneNum">Numéro du téléphone: </label>
                    <input
                        id="phoneNum"
                        name="phoneNum"
                        type="text"
                        maxLength="10"
                        pattern="(05|06|07)\d{8}"
                        placeholder="Taper le numéro du votre téléphone"
                        value={formData.phoneNum}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="expDate">Date d'éxpiration: </label>
                    <input
                        id="expDate"
                        name="expDate"
                        type="date"
                        value={formData.expDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="natId">CIN: </label>
                    <input
                        id="natId"
                        name="natId"
                        type="text"
                        pattern="[A-Za-z]{1,2}\d{5,6}"
                        placeholder="Taper votre CIN"
                        value={formData.natId}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="address">Adresse: </label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Taper votre adresse"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="city">Ville: </label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Taper votre ville"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="country">Pays: </label>
                    <input
                        id="country"
                        name="country"
                        type="text"
                        placeholder="Taper votre pays"
                        value={formData.country}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* ── Erreur ── */}
                {error && (
                    <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                )}

                <footer>
                    {/* ── Annuler → nettoyer cookie + redirect /cart ── */}
                    <a onClick={handleAnnuler} style={{ cursor: "pointer" }}>
                        Annuler Le Payement
                    </a>
                    <input
                        type="submit"
                        value={loading ? "En cours..." : "Confimer Le Payement"}
                        disabled={loading}
                    />
                </footer>
            </form>
        </div>
    )
}

export default PaymentForm