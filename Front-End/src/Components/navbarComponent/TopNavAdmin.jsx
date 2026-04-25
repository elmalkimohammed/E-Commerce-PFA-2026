
import "../styles/TopNavAdmin.css"

function TopNavAdmin() {
    return(
        <div>
            <nav className="adminNav">
                <a href="/adminMonitoring">Surveillance</a>
                <a href="/adminCrudPage">Opérations/Controlle</a>
                <a href="/repport">Réclamations</a>
                <a href="/ProfilePage" className="bi bi-person"></a>
                
            </nav>
        </div>
    )
}

export default TopNavAdmin
