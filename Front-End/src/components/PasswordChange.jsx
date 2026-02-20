import { useState } from "react"
import { authAPI } from "../services/authAPI"

import axios from "axios"

import "./styles/globalAuthForm.css"

function PasswordChange( { onSwitch } ) {

    const [ email , setEmail ] = useState("")

    const verifyEmail = async (e) => {
        try {
            e.preventDefault()
            const tempToken = await axios.get( `${authAPI}/forgot-password/verify-email`,  { params: { email } } )
            sessionStorage.setItem("tempToken_forNewPassword", tempToken.data.resetToken)
            onSwitch("newPassword")
        } catch (error) {
            alert( error.response?.data || "Something's Wrong....1" )
        }
    }

    return(
        <div className="containerBox">
            <div className="header">
                <h1>Réinitialiser le mot de passe</h1>
                <p>Entrez votre email pour avoir l'autorisation de changer votre mot de pass</p>
            </div>
            <span style={{ color: "#2b6cb0", cursor: "pointer" }} onClick={ () => onSwitch("login") }>← Retour à la connexion</span>
            <form onSubmit={ verifyEmail } method="get">
                <div className="knownemailSection">
                    <label htmlFor="knownEmail">Email</label>
                    <input type="email" id="knownEmail" placeholder="username@email.com" onChange={ (e) => { setEmail(e.target.value) } }/>
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
