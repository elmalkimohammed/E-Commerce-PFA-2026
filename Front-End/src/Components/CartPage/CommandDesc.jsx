

function CommandDesc() {
    return(
        <>
            <h1>Resumé</h1>
            <div className="headerRes">
                <p>Des questions ? Contactez notre support !</p>
                <p>Livraison estimée : 3-5 jours ouvrés</p>
                <div className="delivery">
                    <p>Livraison</p>
                    <p>Gratuite</p>
                </div>
            </div>
            <div className="footerRes">
                <div className="totalPrice">
                    <p>Total</p>
                    <span></span>
                </div>
                <button>PASSER LA COMMANDE</button>
                <span>← Continuer mes achats</span>
            </div>
        </>
    )
}

export default CommandDesc
