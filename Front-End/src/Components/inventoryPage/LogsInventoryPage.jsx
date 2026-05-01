import { useState } from "react";

function LogsInventoryPage() {
  const [logType, setLogType] = useState("product"); // "product", "cart", "review"
  const [logs, setLogs] = useState("");

  const loadLogs = (type) => {
    setLogType(type);
    
    // Simulate loading different log files
    const logData = {
      product: `[2026-05-01 09:15:22] ========== PRODUCT CREATED LOGS ==========
[2026-05-01 09:15:22] Product Created: iPhone 15 Pro (ID: 1)
[2026-05-01 09:15:22]   - Price: $1299.99, Stock: 50
[2026-05-01 10:30:45] Product Created: Laptop Pro X (ID: 3)
[2026-05-01 10:30:45]   - Price: $1299.99, Stock: 15
[2026-05-01 11:45:10] Product Created: Casque Audio BT (ID: 5)
[2026-05-01 11:45:10]   - Price: $79.99, Stock: 50
[2026-05-01 16:00:00] Product Created: Gaming Mouse RGB (ID: 18)
[2026-05-01 16:00:00]   - Price: $49.99, Stock: 100
==========================================`,

      cart: `[2026-05-01 09:20:00] ========== CART CREATED LOGS ==========
[2026-05-01 09:20:00] Cart Created: Cart #1001
[2026-05-01 09:20:00]   - User ID: user123
[2026-05-01 10:15:00] Cart Created: Cart #1002
[2026-05-01 10:15:00]   - User ID: user456
[2026-05-01 14:30:00] Cart Created: Cart #1003
[2026-05-01 14:30:00]   - User ID: user789
==========================================`,

      review: `[2026-05-01 10:00:00] ========== REVIEW CREATED LOGS ==========
[2026-05-01 10:00:00] Review Created: Review #R1
[2026-05-01 10:00:00]   - Product ID: 1, User ID: user123
[2026-05-01 10:00:00]   - Rating: 5/5
[2026-05-01 11:30:00] Review Created: Review #R2
[2026-05-01 11:30:00]   - Product ID: 3, User ID: user456
[2026-05-01 11:30:00]   - Rating: 4/5
[2026-05-01 15:45:00] Review Created: Review #R3
[2026-05-01 15:45:00]   - Product ID: 5, User ID: user789
[2026-05-01 15:45:00]   - Rating: 5/5
==========================================`
    };
    
    setLogs(logData[type] || "No logs available");
  };

  // Load default logs on mount
  useState(() => {
    loadLogs("product");
  }, []);

  const logButtons = [
    { id: "product", label: "📦 Produit Crée" },
    { id: "cart", label: "🛒 Pannier Crée" },
    { id: "review", label: "⭐ Review Crée" },
  ];

  return (
    <div>
      <h2>📝 Logs Inventory</h2>
      
      {/* Log Filter Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {logButtons.map(btn => (
          <button
            key={btn.id}
            onClick={() => loadLogs(btn.id)}
            style={{
              padding: "10px 20px",
              background: logType === btn.id ? "#143a63" : "#e0e0e0",
              color: logType === btn.id ? "white" : "#333",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Logs Display */}
      <div style={{ 
        backgroundColor: "#1e1e1e", 
        color: "#d4d4d4",
        padding: "20px",
        borderRadius: "8px",
        fontFamily: "monospace",
        maxHeight: "600px",
        overflowY: "auto",
        fontSize: "13px"
      }}>
        <div style={{ 
          borderBottom: "1px solid #4a4a4a", 
          paddingBottom: "10px", 
          marginBottom: "15px"
        }}>
          <h3 style={{ color: "#fff", margin: 0 }}>📄 {logType.toUpperCase()} LOGS</h3>
        </div>
        <pre style={{ 
          whiteSpace: "pre-wrap", 
          wordWrap: "break-word",
          margin: 0,
          lineHeight: "1.5"
        }}>
          {logs || "Select a log type to view"}
        </pre>
      </div>
    </div>
  );
}

export default LogsInventoryPage;