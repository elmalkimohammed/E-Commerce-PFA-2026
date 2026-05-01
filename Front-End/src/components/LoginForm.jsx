import { authAPI } from "../services/servicesAPI"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

import "./styles/globalAuthForm.css"

function LoginForm( { onSwitch } ) {

    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")

    const navigate = useNavigate()

    // Helper function to decode JWT and get user role
    const getUserRole = (token) => {
        try {
            const base64Url = token.split('.')[1]
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split('')
                    .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join('')
            )
            const decodedToken = JSON.parse(jsonPayload)
            return decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        } catch (error) {
            console.error("Error decoding token:", error)
            return null
        }
    }

    const loginSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post( `${authAPI}/login`, { email , password } )
            const token = response.data // Make sure this is the token string
            
            localStorage.setItem("generatedJWT_Token", token)
            console.log("Token stored:", token)
            
            // Decode token and check role
            const userRole = getUserRole(token)
            console.log("User role:", userRole)
            
            // Redirect based on role
            if (userRole === "Admin") {
                navigate("/adminMonitoring") // or navigate("/MonitoringPage")
            }
            if ( userRole === "Invet" ) {
                navigate("/inventoryManager") // or navigate("/inventoryManager")
            }
            else {
                navigate("/") // Regular user home page
            }
            
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