import { authAPI } from "../services/authAPI"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./styles/globalAuthForm.css"

import axios from "axios"

function RegisterForm( { onSwitch } ) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const regsiterSubmit = async (e) => {
        try {
            e.preventDefault()
            await axios.post( `${authAPI}/register`, { email , password , confirmPassword } )
            onSwitch("login")
        } catch (error) {
            alert( error.response?.data || "Registration Failed" )
        }
    }

    return(
        <div className="containerBox">
            <div className="header">
                <h1>Créer un compte</h1>
                <p>Rejoignez TechStore aujourd'hui</p>
            </div>
            <span style={{ color: "#2b6cb0", cursor: "pointer" }} onClick={ () => onSwitch("login") }>← Retour à la connexion</span>
            <form method="post" onSubmit={regsiterSubmit}>
                <div className="newemailSection">
                    <label htmlFor="newEmail">Email</label>
                    <input type="email" id="newEmail" placeholder="username@email.com" onChange={ (e) => { setEmail(e.target.value) } }/>
                </div>
                <div className="newpasswSection">
                    <label htmlFor="newPassw">Mot de pass</label>
                    <input type="password" id="newPassw" placeholder="********" onChange={ (e) => { setPassword(e.target.value) } }/>
                </div>
                <div className="passwconfSection">
                    <label htmlFor="passwConf">Confirmer le mot de pass</label>
                    <input type="password" id="passwConf" placeholder="********" onChange={ (e) => { setConfirmPassword(e.target.value) } }/>
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
