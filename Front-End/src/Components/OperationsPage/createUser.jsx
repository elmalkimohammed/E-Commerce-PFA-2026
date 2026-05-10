
import "../styles/globalAuthForm.css"

import { useState , useEffect } from "react"

import axios from "axios"

import { authAPI } from "../../services/servicesAPI"

function CreateUser() {

    const [ Email , setEmail ] = useState("")
    const [ Password , setPassword ] = useState("")
    const [ Role , setRole ] = useState("")

    const createUser = async (e) => {
        try {
            e.preventDefault()
            await axios.post( `${authAPI}/adminCreateUser`, { Email , Password , Role } )
            alert("L'utilisateur a étre créer")
        } catch (error) {
            alert( error.response?.data || "User Creation Failed" )
        }
    }

    return(
        <div className="containerBox"  style={{ width:"fit-content",  height:"fit-content"}}>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={ createUser } >
                <div className="inputsSenderBox" style={{ display: "flex", flexDirection: "row", gap: "3em" }}>
                    <div className="privateInfos" style={{ width: "100%" }}>
                        <h1 className="header" style={{ borderRadius: "12px", textAlign: "center" }}>Créer Un Utilisateur</h1>
                        <label htmlFor="emailInput" >Email: </label>
                        <input type="email"id="emailInput" required onChange={ (e) => { setEmail(e.target.value) } } />
                        <label htmlFor="passwInput" >Mot De Pass: </label>
                        <input type="password"id="passwInput" onChange={ (e) => { setPassword(e.target.value) } } required/>
                        <label htmlFor="roleInput" >Role: </label>
                        <input type="text"id="roleInput" onChange={ (e) => { setRole(e.target.value) } } required/>
                    </div>
                </div>
                <input type="submit" value="Creer" />
            </form>
        </div>
        
    )
}

export default CreateUser
