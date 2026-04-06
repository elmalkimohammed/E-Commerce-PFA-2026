import { useNavigate } from "react-router-dom"
import { cartAPI } from "../../services/servicesAPI"
import axios from "axios"
import Cookies from "js-cookie"

import "../styles/CommandDesc.css"

function CommandDesc({ totalP, cartItems }) {

    const navigate = useNavigate()

    /* ── Nettoyer Le Pannier ── */
    const clearCart = async () => {
        const token = localStorage.getItem("generatedJWT_Token")
        if (!token) navigate("/Authentication")

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        const cartInfos = await axios.get(`${cartAPI}/getCart`, config)
        await axios.post(`${cartAPI}/clearCart`, { cartId: cartInfos.data.cartId }, config)
        window.location.reload()
    }

    /* ── Passer La Commande ── */
    const handlePasserCommande = () => {
        // Sauvegarder le panier dans un cookie (expire dans 1 jour)
        Cookies.set("pendingCart", JSON.stringify(cartItems), { expires: 1 })
        // Rediriger vers le formulaire de paiement
        navigate("/paymentForm")
    }

    return (
        <div className="cmdDescContainer" style={{ height: "fit-content" }}>
            <h1>Resumé</h1>
            <hr />
            <div className="headerRes">
                <p>Des questions ? Contactez notre support !</p>
                <p>Livraison estimée : 3-5 jours ouvrés</p>
            </div>
            <hr />
            <div className="delivery">
                <p>Livraison</p>
                <p>Gratuite</p>
            </div>
            <hr />
            <div className="footerRes">
                <div className="totalPrice">
                    <p>Total</p>
                    <span>{totalP} MAD</span>
                </div>
                <div className="buttons">
                    <button onClick={clearCart}>Nettoyer Le Pannier</button>
                    <button onClick={handlePasserCommande}>PASSER LA COMMANDE</button>
                </div>
                <span
                    style={{ textAlign: "center", cursor: "pointer", color: "#143a63" }}
                    onClick={() => navigate("/")}
                >
                    ← Continuer mes achats
                </span>
            </div>
        </div>
    )
}

export default CommandDesc