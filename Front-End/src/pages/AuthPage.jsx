import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";
import PasswordChange from "../Components/PasswordChange";
import NewPassword from "../Components/NewPassword"
import TopNav from "../Components/navbarComponent/TopNav";

import "./Styles/AuthPage.css"

import { useState } from "react";

function AuthPage() {
    const [ currentForm , setCurrentForm ] = useState("login")
    return(
        <>
            <TopNav/>
            <div className="authBox">
                { currentForm == "login" && <LoginForm onSwitch={setCurrentForm}/> }
                { currentForm == "register" && <RegisterForm onSwitch={setCurrentForm}/> }
                { currentForm == "passwChange" && <PasswordChange onSwitch={setCurrentForm}/> }
                { currentForm == "newPassword" && <NewPassword onSwitch={setCurrentForm}/> }
            </div>
        </>
    )
}

export default AuthPage

