import "../styles/RepportSideBar.css";

const navItems = [
    { key: "reclamations", label: "Réclamations", icon: "bi bi-list" },
    { key: "reclamationsCreees", label: "Réclamations Créées", icon: "bi bi-clock" },
    { key: "logs", label: "Logs", icon: "bi bi-file-earmark-text" },
];

function RepportSideBar({ currentPage, onSwitch }) {
    return (
        <aside className="repport-sidebar">
            <p className="sidebar-label">Navigation</p>
            {navItems.map(item => (
                <button
                    key={item.key}
                    className={`sidebar-btn ${currentPage === item.key ? "active" : "" } ${item.icon ? " bi " + item.icon : ""}`}
                    onClick={() => onSwitch(item.key)}
                >
                    
                    {item.label}
                </button>
            ))}
        </aside>
    );
}

export default RepportSideBar;