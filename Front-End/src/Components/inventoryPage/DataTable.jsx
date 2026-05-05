import { useState } from "react";
import { updateProduct, deleteProduct, updateOrderStatus, cancelOrder, updateReview, deleteReview } from "../../services/inventoryService";

function DataTable({ currentPage, data, onRefresh }) {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [message, setMessage] = useState("");

  const startEdit = (item) => {
    setEditingId(item.id || item.orderId || item.reviewId);
    setEditData({ ...item });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditData({});
  };

  const saveEdit = async () => {
    try {
      if (currentPage.includes("product")) {
        await updateProduct(editData);
      } else if (currentPage === "orders") {
        await updateOrderStatus(editData.orderId, editData.status);
      } else if (currentPage.includes("review")) {
        await updateReview(editData.reviewId, editData);
      }
      setMessage("✅ Updated successfully!");
      setTimeout(() => {
        setEditingId(null);
        onRefresh();
        setMessage("");
      }, 1500);
    } catch (e) {
      setMessage("❌ Update failed: " + (e?.response?.data?.message || e.message));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;
    
    try {
      if (currentPage.includes("product")) {
        await deleteProduct(id);
      } else if (currentPage === "orders") {
        await cancelOrder(id);
      } else if (currentPage.includes("review")) {
        await deleteReview(id);
      }
      setMessage("✅ Deleted successfully!");
      setTimeout(() => {
        onRefresh();
        setMessage("");
      }, 1500);
    } catch (e) {
      setMessage("❌ Delete failed: " + (e?.response?.data?.message || e.message));
    }
  };

  const handleInlineChange = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  const getHeaders = () => {
    if (currentPage === "products" || currentPage === "createdProducts") {
      return ["Id", "Nom", "Description", "Prix", "Stock", "Categorie", "Vendeur ID", "Actions"];
    }
    if (currentPage === "orders") {
      return ["OrderId", "UserId", "Status", "Items", "Actions"];
    }
    if (currentPage === "carts" || currentPage === "createdCarts") {
      return ["CartId", "UserId", "Items", "Actions"];
    }
    if (currentPage === "reviews" || currentPage === "createdReviews") {
      return ["ReviewId", "ProductId", "UserId", "Rating", "Comment", "Actions"];
    }
    return ["Data", "Actions"];
  };

  // Fields that are editable
  const getEditableFields = () => {
    if (currentPage === "products" || currentPage === "createdProducts") {
      return ["name", "description", "price", "stock", "category"];
    }
    if (currentPage === "orders") {
      return ["status"];
    }
    if (currentPage === "reviews" || currentPage === "createdReviews") {
      return ["rating", "comment"];
    }
    return [];
  };

  const renderCell = (item, field, value) => {
    const isEditing = editingId === (item.id || item.orderId || item.reviewId);
    const isEditable = getEditableFields().includes(field);
    
    if (!isEditing || !isEditable) {
      return value !== undefined && value !== null ? String(value) : "-";
    }

    // Inline editing inputs based on field type
    if (field === "status") {
      return (
        <select
          value={editData[field] || ""}
          onChange={(e) => handleInlineChange(field, e.target.value)}
          style={{ padding: "5px", width: "100%" }}
        >
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      );
    }
    
    if (field === "rating") {
      return (
        <select
          value={editData[field] || ""}
          onChange={(e) => handleInlineChange(field, e.target.value)}
          style={{ padding: "5px", width: "100%" }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      );
    }

    if (field === "price" || field === "stock") {
      return (
        <input
          type="number"
          value={editData[field] || ""}
          onChange={(e) => handleInlineChange(field, e.target.value)}
          style={{ padding: "5px", width: "100%" }}
        />
      );
    }

    return (
      <input
        value={editData[field] || ""}
        onChange={(e) => handleInlineChange(field, e.target.value)}
        style={{ padding: "5px", width: "100%" }}
      />
    );
  };

  const getFields = () => {
    if (currentPage === "products" || currentPage === "createdProducts") {
      return ["id", "name", "description", "price", "stock", "category", "userId"];
    }
    if (currentPage === "orders") {
      return ["orderId", "userId", "status", "items"];
    }
    if (currentPage === "carts" || currentPage === "createdCarts") {
      return ["cartId", "userId", "items"];
    }
    if (currentPage === "reviews" || currentPage === "createdReviews") {
      return ["reviewId", "productId", "userId", "rating", "comment"];
    }
    return [];
  };

  const getValue = (item, field) => {
    if (field === "items") {
      return item.items?.length || 0;
    }
    return item[field];
  };

  const fields = getFields();

  return (
    <div>
      {message && <div className="message-success">{message}</div>}
      <table className="inventory-table">
        <thead>
          <tr>
            {getHeaders().map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => {
              const isEditing = editingId === (item.id || item.orderId || item.reviewId);
              const itemId = item.id || item.orderId || item.reviewId;
              
              return (
                <tr key={index}>
                  {fields.map((field, i) => (
                    <td key={i}>
                      {renderCell(item, field, getValue(item, field))}
                    </td>
                  ))}
                  <td style={{ padding: "8px", border: "1px solid #ddd", whiteSpace: "nowrap" }}>
                    {isEditing ? (
                      <>
                        <button 
                          className="action-edit" 
                          onClick={saveEdit} 
                          style={{ 
                            marginRight: "5px", 
                            padding: "5px 10px", 
                            background: "#4CAF50", 
                            color: "white", 
                            border: "none", 
                            borderRadius: "3px", 
                            cursor: "pointer" 
                          }}
                        >
                          Save
                        </button>
                        <button 
                          className="action-delete" 
                          onClick={cancelEdit} 
                          style={{ 
                            padding: "5px 10px", 
                            background: "#999", 
                            color: "white", 
                            border: "none", 
                            borderRadius: "3px", 
                            cursor: "pointer" 
                          }}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button 
                          className="action-edit" 
                          onClick={() => startEdit(item)} 
                          style={{ 
                            marginRight: "5px", 
                            padding: "5px 10px", 
                            background: "#4CAF50", 
                            color: "white", 
                            border: "none", 
                            borderRadius: "3px", 
                            cursor: "pointer" 
                          }}
                        >
                          Edit
                        </button>
                        <button 
                          className="action-delete" 
                          onClick={() => handleDelete(itemId)} 
                          style={{ 
                            padding: "5px 10px", 
                            background: "#f44336", 
                            color: "white", 
                            border: "none", 
                            borderRadius: "3px", 
                            cursor: "pointer" 
                          }}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={getHeaders().length} style={{ textAlign: "center", padding: "20px" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;