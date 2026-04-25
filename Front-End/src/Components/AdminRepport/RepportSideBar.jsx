import "../styles/MonitSideBar.css";

function RepportSideBar({ onSwitch }) {
    return (
        <div className="sideBar">
            <h1 style={{ textAlign: "center" }}>Side Bar</h1>
            <p onClick={() => onSwitch("reclamations")}>Réclamations</p>
            <p onClick={() => onSwitch("reclamationsCreees")}>Réclamations Créées</p>
        </div>
    );
}

export default RepportSideBar;