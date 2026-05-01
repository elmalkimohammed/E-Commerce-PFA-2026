import "../styles/TopNavInventory.css";

function TopNavInventory({ activePage, onPageChange }) {
  return (
    <div>
      <nav className="inventoryNav">
        <button
          className={`inventory-nav-btn ${activePage === "inventory" ? "active" : ""}`}
          onClick={() => onPageChange("inventory")}
        >
          📊 Inventory Page
        </button>

        <button
          className={`inventory-nav-btn ${activePage === "create" ? "active" : ""}`}
          onClick={() => onPageChange("create")}
        >
          ✏️ Create Inventory
        </button>

        <button
          className={`inventory-nav-btn ${activePage === "logs" ? "active" : ""}`}
          onClick={() => onPageChange("logs")}
        >
          📝 Logs Inventory
        </button>

        <a href="/adminProfilePage" className="bi bi-person profile-icon"></a>
      </nav>
    </div>
  );
}

export default TopNavInventory;