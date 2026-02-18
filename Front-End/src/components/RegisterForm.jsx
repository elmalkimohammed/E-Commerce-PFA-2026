import "./styles/RegisterForm.css"

function RegisterForm( { onSwitch } ) {
    return(
        <div className="containerBox">
            <div className="header">
                <h1>Créer un compte</h1>
                <p>Rejoignez TechStore aujourd'hui</p>
            </div>
            <span style={{ color: "#2b6cb0", cursor: "pointer" }} onClick={ () => onSwitch("login") }>← Retour à la connexion</span>
            <form method="post">
                <div className="newemailSection">
                    <label htmlFor="newEmail">Email</label>
                    <input type="text" id="newEmail" placeholder="username@email.com" />
                </div>
                <div className="newpasswSection">
                    <label htmlFor="newPassw">Mot de pass</label>
                    <input type="password" id="newPassw" placeholder="********" />
                </div>
                <div className="passwconfSection">
                    <label htmlFor="passwConf">Confirmer le mot de pass</label>
                    <input type="password" id="passwConf" placeholder="********" />
                </div>
                <input type="submit" value="Créer mon compte" />
            </form>
            <div className="footer">
                <p>Vous avez déjà un compte? <span style={{ cursor: "pointer" }} onClick={ () => onSwitch("login") }>Se connecter</span></p>
            </div>
        </div>
    )
}

export default RegisterForm 
