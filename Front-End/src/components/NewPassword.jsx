import { authAPI } from "../services/authAPI"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

import "./styles/globalAuthForm.css"

function NewPassword( { onSwitch } ) {

    const [ newPassword , setNewPassword ] = useState("")
    const resetToken = sessionStorage.getItem("tempToken_forNewPassword")
    const navigate = useNavigate()

    const updatedPasswordSubmit = async (e) => {
        try {
            e.preventDefault()
            await axios.post(`${authAPI}/forgot-password/reset`, { newPassword , resetToken } )
            alert("Password Successfully Changed!")
            sessionStorage.removeItem("tempToken_forNewPassword")
            onSwitch("login")
        } catch (error) {
            alert( error.response?.data || "Something's Wrong......2" )
        }
    }

    return(
        <div className="containerBox">
            <div className="header">
                <h1>Réinitialiser le mot de passe</h1>
                <p>Email Trouvé! Entrez le nouveau mot de pass, et souvenez-vous-en bien!</p>
            </div>
            <span style={{ color: "#2b6cb0", cursor: "pointer" }} onClick={ () => onSwitch("login") }>← Retour à la connexion</span>
            <form onSubmit={ updatedPasswordSubmit } method="post">
                <div className="updatedpasswSection">
                    <label htmlFor="updatedPassw">Nouveau mot de pass</label>
                    <input type="password" id="updatedPassw" placeholder="********" onChange={ (e) => { setNewPassword(e.target.value) } }/>
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
