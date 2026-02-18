import "./styles/globalAuthForm.css"

function NewPassword( { onSwitch } ) {
    return(
        <div className="containerBox">
            <div className="header">
                <h1>Réinitialiser le mot de passe</h1>
                <p>Email Trouvé! Entrez le nouveau mot de pass, et souvenez-vous-en bien!</p>
            </div>
            <span style={{ color: "#2b6cb0", cursor: "pointer" }} onClick={ () => onSwitch("login") }>← Retour à la connexion</span>
            <form method="post">
                <div className="updatedpasswSection">
                    <label htmlFor="updatedPassw">Email</label>
                    <input type="password" id="updatedPassw" placeholder="********" />
                </div>
                <input type="submit" value="Appliquer le nouveau mot de pass" />
            </form>
            <div className="footer">
                <p>Vous vous souvenez de votre mot de passe?<span style={{ cursor: "pointer" }} onClick={ () => onSwitch("login") }>Se connecter</span></p>
            </div>
        </div>
    )
}

export default NewPassword
