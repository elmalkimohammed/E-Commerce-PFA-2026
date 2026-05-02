import { useState, useEffect } from "react";

function LogsInventoryPage() {
  const [logType, setLogType] = useState("product");
  const [logs, setLogs] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [stats, setStats] = useState(null);

  const fetchLogs = async () => {
    setLoading(true);
    setError("");
    
    try {
      const token = localStorage.getItem("generatedJWT_Token");
      const baseUrl = "http://localhost:5000"; // Change to your backend port
      
      let endpoint = "";
      switch(logType) {
        case "product":
          endpoint = `${baseUrl}/api/inventory/products/logs`;
          break;
        case "cart":
          endpoint = `${baseUrl}/api/inventory/carts/logs`;
          break;
        case "review":
          endpoint = `${baseUrl}/api/inventory/reviews/logs`;
          break;
        default:
          endpoint = `${baseUrl}/api/inventory/products/logs`;
      }
      
      const response = await fetch(endpoint, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to load logs: ${response.status}`);
      }
      
      const text = await response.text();
      setLogs(text || "No logs available");
      
      // Fetch statistics for products
      if (logType === "product") {
        const statsResponse = await fetch(`${baseUrl}/api/inventory/products/statistics`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (statsResponse.ok) {
          const statsData = await statsResponse.json();
          setStats(statsData);
        }
      } else {
        setStats(null);
      }
      
    } catch (err) {
      console.error("Error fetching logs:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [logType]);

  const logButtons = [
    { id: "product", label: "📦 PRODUCT LOGS" },
    { id: "cart", label: "🛒 CART LOGS" },
    { id: "review", label: "⭐ REVIEW LOGS" },
  ];

  return (
    <div className="logs-page">
      <h2>Logs Inventory</h2>
      
      {stats && logType === "product" && (
        <div className="stats-cards">
          <div className="stat-card">
            <span className="stat-value">{stats.totalCreated}</span>
            <span className="stat-label">Products Created</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{stats.totalDeleted}</span>
            <span className="stat-label">Products Deleted</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{stats.totalEvents}</span>
            <span className="stat-label">Total Events</span>
          </div>
        </div>
      )}
      
      <div className="logs-tabs">
        {logButtons.map(btn => (
          <button
            key={btn.id}
            className={`logs-tab ${logType === btn.id ? "active" : ""}`}
            onClick={() => setLogType(btn.id)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="logs-container">
        <div className="logs-header">
          <h3>📄 {logType.toUpperCase()} LOGS</h3>
          <button onClick={() => fetchLogs()} className="logs-refresh-btn">
            🔄 Refresh
          </button>
        </div>
        
        {loading && <div className="logs-loading">Loading logs...</div>}
        
        {error && !loading && (
          <div className="logs-error">
            ⚠️ {error}
            <button onClick={() => fetchLogs()}>Retry</button>
          </div>
        )}
        
        {!loading && !error && (
          <pre className="logs-content">
            {logs || "No logs available"}
          </pre>
        )}
      </div>
    </div>
  );
}

export default LogsInventoryPage;