import "./styles/globalAuthForm.css"

function LoginForm( { onSwitch } ) {
    return(
        <div className="containerBox">
            <div className="header">
                <h1>Connexion</h1>
                <p>Bienvenue! Connectez-vous à votre compte</p>
            </div>
            <form method="post">
                <div className="emailSection">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="username@email.com" />
                </div>
                <div className="passwordSection">
                    <label htmlFor="password">Mot de pass</label>
                    <input type="password" id="password" placeholder="********"/>
                </div>
                <input type="submit" value="Se connecter"/>
                <span className="forgotPassw" style={{ color: "#2b6cb0", cursor: "pointer" }} onClick={ () => onSwitch("passwChange") }>Mot de passe oublié?</span>
            </form>
            <div className="footer">
                <p>Pas encore de compte?<span className="newAcc" style={{ cursor: "pointer" }} onClick={ () => onSwitch("register") }>S'inscrire</span></p>
            </div>
        </div>
    )
}

export default LoginForm
