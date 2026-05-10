
import "../styles/MonitSideBar.css"

function OpsSideBar( { onSwitch } ) {
    return(
        <div className="sideBar">
            <h1 style={ { textAlign: "center" } } >Side Bar</h1>
            <p onClick={ () => onSwitch("users")}>Utilisateurs</p>
            <p onClick={ () => onSwitch("plans")}>Plans D'inscription</p>
            <p onClick={ () => onSwitch("SubbedUsers")}>Utilisateurs Inscrits</p>
            <p onClick={ () => onSwitch("createUser")}>Ajouter Un Utilisateur</p>
        </div>
    )
}

export default OpsSideBar
