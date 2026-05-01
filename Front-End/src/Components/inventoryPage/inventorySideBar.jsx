import "../styles/InventorySideBar.css";

function InventorySideBar({ currentTable, onTableChange }) {
  const tableButtons = [
    { id: "products", label: "📦 Products", icon: "bi bi-box" },
    { id: "orders", label: "📋 Orders", icon: "bi bi-receipt" },
    { id: "carts", label: "🛒 Carts", icon: "bi bi-cart" },
    { id: "reviews", label: "⭐ Reviews", icon: "bi bi-star" },
  ];

  return (
    <div className="inventory-sidebar">
      <h3 className="sidebar-title">Data Tables</h3>
      {tableButtons.map(btn => (
        <button
          key={btn.id}
          className={`sidebar-table-btn ${currentTable === btn.id ? "active" : ""}`}
          onClick={() => onTableChange(btn.id)}
        >
          <i className={btn.icon}></i>
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default InventorySideBar;