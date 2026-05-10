import "../styles/TopNavHelpCenter.css";

const navLinks = [
    { key: "reclamationsCreees", label: "Todays Reports" },
    { key: "reclamations",       label: "Crud Operations" },
    { key: "logs",               label: "Logs" },
];

function TopNavHelpCenter({ currentPage, onSwitch }) {
    return (
        <nav className="adminNav">
            {navLinks.map(link => (
                <a
                    key={link.key}
                    className={currentPage === link.key ? "active" : ""}
                    onClick={() => onSwitch(link.key)}
                >
                    {link.label}
                </a>
            ))}
            <a href="/adminProfilePage" className="bi bi-person" />
        </nav>
    );
}

export default TopNavHelpCenter;
