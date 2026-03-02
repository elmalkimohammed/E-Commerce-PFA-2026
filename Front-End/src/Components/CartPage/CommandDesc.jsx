import { useNavigate } from "react-router-dom"

import "../styles/CommandDesc.css"

function CommandDesc() {

    const navigate = useNavigate()

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
                    <span>1</span>
                </div>
                <div className="buttons">
                    <button>Nettoyer Le Pannier</button>
                    <button >PASSER LA COMMANDE</button>
                </div>
                <span style={ { textAlign: "center", cursor: "pointer", color: "#143a63" } } onClick={ () => { navigate("/") } } >← Continuer mes achats</span>
            </div>
        </div>
    )
}

export default CommandDesc
