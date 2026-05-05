import { useState, useEffect } from "react";

function LogsInventoryPage() {
  const [logType, setLogType] = useState("product"); // "product", "order", "cart", "review"
  const [productLogSubType, setProductLogSubType] = useState("created"); // "created", "updated", "deleted"
  const [orderLogSubType, setOrderLogSubType] = useState("created"); // "created", "updated", "cancelled"
  const [cartLogSubType, setCartLogSubType] = useState("updated"); // "updated", "deleted"
  const [reviewLogSubType, setReviewLogSubType] = useState("created"); // "created", "updated", "deleted"
  const [logs, setLogs] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchLogs = async () => {
    setLoading(true);
    setError("");
    
    try {
      const token = localStorage.getItem("generatedJWT_Token");
      const baseUrl = "http://localhost:5009"; // Your AdminLogsService port
      
      let endpoint = "";
      
      switch(logType) {
        case "product":
          switch(productLogSubType) {
            case "created":
              endpoint = `${baseUrl}/api/inventory/products/created/logs`;
              break;
            case "updated":
              endpoint = `${baseUrl}/api/inventory/products/updated/logs`;
              break;
            case "deleted":
              endpoint = `${baseUrl}/api/inventory/products/deleted/logs`;
              break;
            default:
              endpoint = `${baseUrl}/api/inventory/products/created/logs`;
          }
          break;
        case "order":
          switch(orderLogSubType) {
            case "created":
              endpoint = `${baseUrl}/api/inventory/orders/created/logs`;
              break;
            case "updated":
              endpoint = `${baseUrl}/api/inventory/orders/updated/logs`;
              break;
            case "cancelled":
              endpoint = `${baseUrl}/api/inventory/orders/cancelled/logs`;
              break;
            default:
              endpoint = `${baseUrl}/api/inventory/orders/created/logs`;
          }
          break;
        case "cart":
          switch(cartLogSubType) {
            case "updated":
              endpoint = `${baseUrl}/api/inventory/carts/updated/logs`;
              break;
            case "deleted":
              endpoint = `${baseUrl}/api/inventory/carts/deleted/logs`;
              break;
            default:
              endpoint = `${baseUrl}/api/inventory/carts/updated/logs`;
          }
          break;
        case "review":
          switch(reviewLogSubType) {
            case "created":
              endpoint = `${baseUrl}/api/inventory/reviews/created/logs`;
              break;
            case "updated":
              endpoint = `${baseUrl}/api/inventory/reviews/updated/logs`;
              break;
            case "deleted":
              endpoint = `${baseUrl}/api/inventory/reviews/deleted/logs`;
              break;
            default:
              endpoint = `${baseUrl}/api/inventory/reviews/created/logs`;
          }
          break;
        default:
          endpoint = `${baseUrl}/api/inventory/products/created/logs`;
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
      
    } catch (err) {
      console.error("Error fetching logs:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch logs when any relevant state changes
  useEffect(() => {
    fetchLogs();
  }, [logType, productLogSubType, orderLogSubType, cartLogSubType, reviewLogSubType]);

  // Product sub-type buttons
  const productSubButtons = [
    { id: "created", label: "📝 CREATED", color: "#4CAF50" },
    { id: "updated", label: "✏️ UPDATED", color: "#FF9800" },
    { id: "deleted", label: "🗑️ DELETED", color: "#f44336" },
  ];

  // Order sub-type buttons
  const orderSubButtons = [
    { id: "created", label: "📝 CREATED", color: "#4CAF50" },
    { id: "updated", label: "✏️ UPDATED", color: "#FF9800" },
    { id: "cancelled", label: "❌ CANCELLED", color: "#f44336" },
  ];

  // Cart sub-type buttons
  const cartSubButtons = [
    { id: "updated", label: "✏️ UPDATED", color: "#FF9800" },
    { id: "deleted", label: "🗑️ DELETED", color: "#f44336" },
  ];

  // Review sub-type buttons
  const reviewSubButtons = [
    { id: "created", label: "📝 CREATED", color: "#4CAF50" },
    { id: "updated", label: "✏️ UPDATED", color: "#FF9800" },
    { id: "deleted", label: "🗑️ DELETED", color: "#f44336" },
  ];

  const logButtons = [
    { id: "product", label: "📦 PRODUCT LOGS" },
    { id: "order", label: "📋 ORDER LOGS" },
    { id: "cart", label: "🛒 CART LOGS" },
    { id: "review", label: "⭐ REVIEW LOGS" },
  ];

  // Get title based on current selection
  const getTitle = () => {
    if (logType === "product") {
      return `PRODUCT ${productLogSubType.toUpperCase()} LOGS`;
    }
    if (logType === "order") {
      return `ORDER ${orderLogSubType.toUpperCase()} LOGS`;
    }
    if (logType === "cart") {
      return `CART ${cartLogSubType.toUpperCase()} LOGS`;
    }
    if (logType === "review") {
      return `REVIEW ${reviewLogSubType.toUpperCase()} LOGS`;
    }
    return `${logType.toUpperCase()} LOGS`;
  };

  return (
    <div className="logs-page">
      <h2>Logs Inventory</h2>
      
      {/* Main Category Buttons */}
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

      {/* Product Sub-Type Buttons */}
      {logType === "product" && (
        <div className="product-sub-tabs">
          {productSubButtons.map(btn => (
            <button
              key={btn.id}
              className={`product-sub-tab ${productLogSubType === btn.id ? "active" : ""}`}
              onClick={() => setProductLogSubType(btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}

      {/* Order Sub-Type Buttons */}
      {logType === "order" && (
        <div className="order-sub-tabs">
          {orderSubButtons.map(btn => (
            <button
              key={btn.id}
              className={`order-sub-tab ${orderLogSubType === btn.id ? "active" : ""}`}
              onClick={() => setOrderLogSubType(btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}

      {/* Cart Sub-Type Buttons */}
      {logType === "cart" && (
        <div className="cart-sub-tabs">
          {cartSubButtons.map(btn => (
            <button
              key={btn.id}
              className={`cart-sub-tab ${cartLogSubType === btn.id ? "active" : ""}`}
              onClick={() => setCartLogSubType(btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}

      {/* Review Sub-Type Buttons */}
      {logType === "review" && (
        <div className="review-sub-tabs">
          {reviewSubButtons.map(btn => (
            <button
              key={btn.id}
              className={`review-sub-tab ${reviewLogSubType === btn.id ? "active" : ""}`}
              onClick={() => setReviewLogSubType(btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}

      <div className="logs-container">
        <div className="logs-header">
          <h3>📄 {getTitle()}</h3>
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