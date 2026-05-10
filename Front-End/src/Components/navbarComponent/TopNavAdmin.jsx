import logo from "../../assets/AutoNova_Logo.png"
import "../styles/TopNavAdmin.css"

function TopNavAdmin() {
    return(
            <nav className="top-nav">
                <div className="redirect">
                    <p className="brand"> <img src={logo} alt="test"/> </p>
                    <p><a href="/adminMonitoring">Surveillance</a></p>
                    <p><a href="/adminCrudPage">Opérations/Controlle</a></p>
                    <p><a href="/adminProfilePage" className="bi bi-person"></a></p>
                </div>                
            </nav>
    )
}

export default TopNavAdmin
