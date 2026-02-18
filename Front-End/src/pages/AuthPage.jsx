import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import PasswordChange from "../components/PasswordChange";

import "./styles/AuthPage.css"

import { useState } from "react";

function AuthPage() {
    const [ currentForm , setCurrentForm ] = useState("login")
    return(
        <div className="authBox">
            { currentForm == "login" && <LoginForm onSwitch={setCurrentForm}/> }
            { currentForm == "register" && <RegisterForm onSwitch={setCurrentForm}/> }
            { currentForm == "passwChange" && <PasswordChange onSwitch={setCurrentForm}/> }
        </div>
    )
}

export default AuthPage
