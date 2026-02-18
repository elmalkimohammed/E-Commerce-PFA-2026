import "./styles/globalAuthForm.css"

function PasswordChange( { onSwitch } ) {
    return(
        <div className="containerBox">
            <div className="header">
                <h1>Réinitialiser le mot de passe</h1>
                <p>Entrez votre email pour avoir l'autorisation de changer votre mot de pass</p>
            </div>
            <span style={{ color: "#2b6cb0", cursor: "pointer" }} onClick={ () => onSwitch("login") }>← Retour à la connexion</span>
            <form method="post">
                <div className="knownemailSection">
                    <label htmlFor="knownEmail">Email</label>
                    <input type="email" id="knownEmail" placeholder="username@email.com" />
                </div>
                <input type="submit" value="Vérifier" />
            </form>
            <div className="footer">
                <p>Vous vous souvenez de votre mot de passe?<span style={{ cursor: "pointer" }} onClick={ () => onSwitch("login") }>Se connecter</span></p>
            </div>
        </div>
    )
}

export default PasswordChange
