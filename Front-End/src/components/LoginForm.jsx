import { authAPI } from "../services/authAPI"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

import "./styles/globalAuthForm.css"

function LoginForm( { onSwitch } ) {

    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")

    const navigate = useNavigate()

    const loginSubmit = async (e) => {
        try {
            e.preventDefault()
            const token = await axios.post( `${authAPI}/login`, { email , password } )
            localStorage.setItem("generatedJWT_Token", token)
            navigate("/Authentication") // The Route Will Be Changed When The Actual Home Page Is Made
            console.log("hi")
        } catch (error) {
            alert( error.response?.data || "Login Failed" )
        }
    }

    return(
        <div className="containerBox">
            <div className="header">
                <h1>Connexion</h1>
                <p>Bienvenue! Connectez-vous à votre compte</p>
            </div>
            <form onSubmit={ loginSubmit } method="post">
                <div className="emailSection">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="username@email.com" onChange={ (e) => { setEmail(e.target.value) } }/>
                </div>
                <div className="passwordSection">
                    <label htmlFor="password">Mot de pass</label>
                    <input type="password" id="password" placeholder="********" onChange={ (e) => { setPassword(e.target.value) } }/>
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
