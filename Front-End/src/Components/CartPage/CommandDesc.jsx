import { useNavigate } from "react-router-dom"
import { cartAPI } from "../../services/servicesAPI"
import axios from "axios"

import "../styles/CommandDesc.css"

function CommandDesc( { totalP } ) {

    const navigate = useNavigate()

    const clearCart = async () => {
        /* Recovering The JWT As It's Needed To Clear The Cart From Items */
        const token = localStorage.getItem("generatedJWT_Token")
        if ( !token ) navigate("/Authentication")
        /* Declaring The Constant Responsible For The Config */ 
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        const cartInfos = await axios.get(`${cartAPI}/getCart`, config)
        await axios.post(`${cartAPI}/clearCart`, { cartId: cartInfos.data.cartId }, config )
        /* Forcefully Reload The Page To Display The New Changes */
        window.location.reload()
    }

    return(
        <div className="cmdDescContainer" style={ { height: "fit-content" } }>
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
                    <span>{totalP}</span>
                </div>
                <div className="buttons">
                    <button onClick={clearCart}>Nettoyer Le Pannier</button>
                    <button >PASSER LA COMMANDE</button>
                </div>
                <span style={ { textAlign: "center", cursor: "pointer", color: "#143a63" } } onClick={ () => { navigate("/") } } >← Continuer mes achats</span>
            </div>
        </div>
    )
}

export default CommandDesc
