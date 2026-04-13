
import "../styles/TopNavAdmin.css"

function TopNavAdmin() {
    return(
        <div>
            <nav>
                <a href="/adminMonitoring">Surveillance</a>
                <a href="/adminCrudPage">Opérations/Controlle</a>
                <a href="/ProfilePage" className="bi bi-person"></a>
            </nav>
        </div>
    )
}

export default TopNavAdmin
