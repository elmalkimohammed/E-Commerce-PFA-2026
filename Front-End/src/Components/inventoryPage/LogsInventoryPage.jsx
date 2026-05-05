import { useState, useEffect } from "react";
import { adminInventoryAPI } from "../../services/servicesAPI";

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
      
      // Utilisation de l'endpoint centralisé (sans port spécifique)
      const baseUrl = adminInventoryAPI; // "http://localhost/api/inventory"
      
      let endpoint = "";
      
      switch(logType) {
        case "product":
          switch(productLogSubType) {
            case "created":
              endpoint = `${baseUrl}/products/created/logs`;
              break;
            case "updated":
              endpoint = `${baseUrl}/products/updated/logs`;
              break;
            case "deleted":
              endpoint = `${baseUrl}/products/deleted/logs`;
              break;
            default:
              endpoint = `${baseUrl}/products/created/logs`;
          }
          break;
        case "order":
          switch(orderLogSubType) {
            case "created":
              endpoint = `${baseUrl}/orders/created/logs`;
              break;
            case "updated":
              endpoint = `${baseUrl}/orders/updated/logs`;
              break;
            case "cancelled":
              endpoint = `${baseUrl}/orders/cancelled/logs`;
              break;
            default:
              endpoint = `${baseUrl}/orders/created/logs`;
          }
          break;
        case "cart":
          switch(cartLogSubType) {
            case "updated":
              endpoint = `${baseUrl}/carts/updated/logs`;
              break;
            case "deleted":
              endpoint = `${baseUrl}/carts/deleted/logs`;
              break;
            default:
              endpoint = `${baseUrl}/carts/updated/logs`;
          }
          break;
        case "review":
          switch(reviewLogSubType) {
            case "created":
              endpoint = `${baseUrl}/reviews/created/logs`;
              break;
            case "updated":
              endpoint = `${baseUrl}/reviews/updated/logs`;
              break;
            case "deleted":
              endpoint = `${baseUrl}/reviews/deleted/logs`;
              break;
            default:
              endpoint = `${baseUrl}/reviews/created/logs`;
          }
          break;
        default:
          endpoint = `${baseUrl}/products/created/logs`;
      }
      
      console.log("Fetching logs from:", endpoint); // Pour debug
      
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
              style={{ backgroundColor: productLogSubType === btn.id ? btn.color : "#eee" }}
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
              style={{ backgroundColor: orderLogSubType === btn.id ? btn.color : "#eee" }}
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
              style={{ backgroundColor: cartLogSubType === btn.id ? btn.color : "#eee" }}
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
              style={{ backgroundColor: reviewLogSubType === btn.id ? btn.color : "#eee" }}
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
        
        {loading && (
          <div className="logs-loading">
            <div className="spinner"></div>
            Loading logs...
          </div>
        )}
        
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

      <style jsx>{`
        .logs-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Courier New', monospace;
        }
        .logs-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .logs-tab {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          transition: all 0.3s;
          background: #f0f0f0;
        }
        .logs-tab.active {
          background: #4a90e2;
          color: white;
          transform: scale(1.05);
        }
        .product-sub-tabs, .order-sub-tabs, .cart-sub-tabs, .review-sub-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .product-sub-tab, .order-sub-tab, .cart-sub-tab, .review-sub-tab {
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.3s;
          color: white;
        }
        .logs-container {
          background: #1e1e1e;
          border-radius: 8px;
          padding: 20px;
          margin-top: 20px;
        }
        .logs-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #444;
        }
        .logs-header h3 {
          margin: 0;
          color: #4a90e2;
          font-size: 18px;
        }
        .logs-refresh-btn {
          padding: 8px 16px;
          background: #4a90e2;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
        }
        .logs-refresh-btn:hover {
          background: #357abd;
        }
        .logs-loading {
          color: #4a90e2;
          text-align: center;
          padding: 40px;
          font-size: 16px;
        }
        .logs-error {
          color: #f44336;
          text-align: center;
          padding: 40px;
        }
        .logs-error button {
          margin-left: 10px;
          padding: 5px 10px;
          background: #f44336;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .logs-content {
          background: #2d2d2d;
          color: #d4d4d4;
          padding: 15px;
          border-radius: 6px;
          overflow-x: auto;
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #4a90e2;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
          margin: 0 auto 10px;
        }
      `}</style>
    </div>
  );
}

export default LogsInventoryPage;