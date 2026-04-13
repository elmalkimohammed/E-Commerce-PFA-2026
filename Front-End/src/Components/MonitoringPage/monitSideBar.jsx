
import { useNavigate } from "react-router-dom"

import "../styles/MonitSideBar.css"

function MonitSideBar( { onSwitch } ) {
    return(
        <div className="sideBar">
            <p onClick={ () => onSwitch("cmds")}>Commandes</p>
            <p href="" onClick={ () => onSwitch("createdUsers")}>Utilisateurs Crées</p>
            <p href="" onClick={ () => onSwitch("connUsers")}>Utilisateurs Connectées</p>
            <p href="" onClick={ () => onSwitch("plans")}>Plans D'inscription</p>
            <p href="" onClick={ () => onSwitch("SubbedUsers")}>Utilisateurs Inscrits</p>
        </div>
    )
}

export default MonitSideBar
