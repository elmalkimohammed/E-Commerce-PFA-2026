
import "../styles/MonitSideBar.css"

function MonitSideBar( { onSwitch } ) {
    return(
        <div className="sideBar">
            <h1 style={ { textAlign: "center" } } >Side Bar</h1>
            <p onClick={ () => onSwitch("createdUsers")}>Utilisateurs Crées</p>
            <p onClick={ () => onSwitch("connUsers")}>Utilisateurs Connectées</p>
            <p onClick={ () => onSwitch("plans")}>Plans D'inscription</p>
            <p onClick={ () => onSwitch("SubbedUsers")}>Utilisateurs Inscrits</p>
        </div>
    )
}

export default MonitSideBar
