import "../styles/paymentForm.css"

function PaymentForm() {
    return(
        <div className="containerBox">
            <div className="header">
                    <h1>Validation du paiement</h1>
                    <p>Valider votre commande après le remplissage de ces informations</p>
            </div>
            <form method="post" className="payForm">
                <div>
                    <label htmlFor="cardName">Nom du carte: </label>
                    <input id="cardName" type="text" placeholder="Taper le nom du votre cart"/>
                </div>
                
                <div>
                    <label htmlFor="cardNum">Code postal: </label>
                    <input id="cardNum" type="text" maxLength="5" pattern="\d{5}" placeholder="Taper le code postal de votre cart (doit étre 5 chiffres)"/>
                </div>

                <div>
                    <label htmlFor="phoneNum">Numéro du téléphone: </label>
                    <input id="phoneNum" type="text" maxLength="10" pattern="(05|06|07\d{8})" placeholder="Taper le numéro du votre téléphone"/>
                </div>

                <div>
                    <label htmlFor="expDate">Date d'éxpiration: </label>
                    <input id="expDate" type="date"/>
                </div>

                <div>
                    <label htmlFor="natId">CIN: </label>
                    <input id="natId" type="text" pattern="[A-Za-z]{1,2}\d{5,6}" placeholder="Taper votre CIN"/>
                </div>

                <div>
                    <label htmlFor="address">Adresse: </label>
                    <input id="address" type="text" placeholder="Taper votre adresse"/>
                </div>

                <div>
                    <label htmlFor="city">Ville: </label>
                    <input id="city" type="text" placeholder="Taper votre ville"/>
                </div>

                <div>
                    <label htmlFor="country">Pays: </label>
                    <input id="country" type="text" placeholder="Taper votre pays"/>
                </div>

                <footer>
                    <a href="">Annuler Le Payement</a>
                    <input type="submit" value="Confimer Le Payement" />
                </footer>
            </form>
        </div>
        
    )
}

export default PaymentForm
