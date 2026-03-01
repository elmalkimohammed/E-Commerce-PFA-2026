import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import PasswordChange from "../components/PasswordChange";
import NewPassword from "../components/NewPassword"
import TopNav from "../Components/navbarComponent/TopNav";

import "./styles/AuthPage.css"

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
