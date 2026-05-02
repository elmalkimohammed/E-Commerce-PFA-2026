import "../styles/TopNavInventory.css";

function TopNavInventory({ activePage, onPageChange }) {
  return (
    <div>
      <nav className="inventoryNav">
        <div className="nav-center">
          <button
            className={`inventory-nav-btn ${activePage === "inventory" ? "active" : ""}`}
            onClick={() => onPageChange("inventory")}
          >
            INVENTORY PAGE
          </button>

          <button
            className={`inventory-nav-btn ${activePage === "create" ? "active" : ""}`}
            onClick={() => onPageChange("create")}
          >
            CREATE INVENTORY
          </button>

          <button
            className={`inventory-nav-btn ${activePage === "logs" ? "active" : ""}`}
            onClick={() => onPageChange("logs")}
          >
            LOGS INVENTORY
          </button>
        </div>
        
        <a href="/adminProfilePage" className="bi bi-person profile-icon"></a>
      </nav>
    </div>
  );
}

export default TopNavInventory;