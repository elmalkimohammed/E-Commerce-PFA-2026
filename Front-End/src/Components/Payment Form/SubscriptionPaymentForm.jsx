import { useState } from "react"
import "../styles/paymentForm.css"

function SubscriptionPaymentForm({ onConfirm }) {

    const [loading, setLoading] = useState(false)
    const [error,   setError]   = useState(null)

    const [formData, setFormData] = useState({
        cardName: "",
        cardNum:  "",
        phoneNum: "",
        expDate:  "",
        natId:    "",
        address:  "",
        city:     "",
        country:  ""
    })

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleAnnuler = () => {
        localStorage.removeItem("subscriptionPlan")
        window.history.back()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            await onConfirm(formData)
        } catch (err) {
            if (err.message) {
                setError(`Erreur: ${err.message}`)
            } else {
                setError("Une erreur est survenue. Veuillez réessayer.")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="containerBox" style={{ alignItems: "center", width: "100%" }}>
            <div className="header">
                <h1>Validation du paiement</h1>
                <p>Valider votre commande après le remplissage de ces informations</p>
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

                {error && (
                    <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                )}

                <footer>
                    <a onClick={handleAnnuler} style={{ cursor: "pointer" }}>
                        Annuler Le Payement
                    </a>
                    <input
                        type="submit"
                        value={loading ? "En cours..." : "Confirmer Le Payement"}
                        disabled={loading}
                    />
                </footer>
            </form>
        </div>
    )
}

export default SubscriptionPaymentForm