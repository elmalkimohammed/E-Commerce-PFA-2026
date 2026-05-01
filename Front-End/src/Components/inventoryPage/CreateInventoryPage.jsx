import { useState } from "react";
import {
  createProduct,
  createReview,
  createOrder,
} from "../../services/inventoryService";

function CreateInventoryPage() {
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    userId: "",
    attributes: "{}",
  });
  
  const [orderForm, setOrderForm] = useState({
    userId: "",
    items: "[]",
    status: "Pending",
  });
  
  const [reviewForm, setReviewForm] = useState({
    productId: "",
    userId: "",
    rating: "5",
    comment: "",
  });
  
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const [activeForm, setActiveForm] = useState("product");
  const [isLoading, setIsLoading] = useState(false);

  // Clear message after 3 seconds
  const clearMessageAfterDelay = () => {
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000);
  };

  const parseAttributes = (value) => {
    try {
      return JSON.parse(value || "{}");
    } catch {
      return {};
    }
  };

  const parseItems = (value) => {
    try {
      return JSON.parse(value || "[]");
    } catch {
      return [];
    }
  };

  const showSuccess = (msg) => {
    setMessage(msg);
    setMessageType("success");
    clearMessageAfterDelay();
  };

  const showError = (msg) => {
    setMessage(msg);
    setMessageType("error");
    clearMessageAfterDelay();
  };

  const onCreateProduct = async () => {
    // Validate required fields
    if (!productForm.name || !productForm.price || !productForm.stock || !productForm.userId) {
      showError("❌ Please fill all required fields (Name, Price, Stock, User ID)");
      return;
    }

    setIsLoading(true);
    try {
      await createProduct({
        name: productForm.name,
        description: productForm.description,
        price: Number(productForm.price),
        stock: Number(productForm.stock),
        category: productForm.category,
        userId: productForm.userId,
        attributes: parseAttributes(productForm.attributes),
      });
      
      showSuccess("✅ Product created successfully!");
      
      // Reset form
      setProductForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        userId: "",
        attributes: "{}",
      });
    } catch (e) {
      showError("❌ Error: " + (e?.response?.data?.message || e.message));
    } finally {
      setIsLoading(false);
    }
  };

  const onCreateOrder = async () => {
    if (!orderForm.userId) {
      showError("❌ Please fill User ID");
      return;
    }

    setIsLoading(true);
    try {
      await createOrder({
        userId: orderForm.userId,
        items: parseItems(orderForm.items),
        status: orderForm.status,
      });
      
      showSuccess("✅ Order created successfully!");
      
      setOrderForm({
        userId: "",
        items: "[]",
        status: "Pending",
      });
    } catch (e) {
      showError("❌ Error: " + (e?.response?.data?.message || e.message));
    } finally {
      setIsLoading(false);
    }
  };

  const onCreateReview = async () => {
    if (!reviewForm.productId || !reviewForm.userId) {
      showError("❌ Please fill Product ID and User ID");
      return;
    }

    setIsLoading(true);
    try {
      await createReview({
        productId: reviewForm.productId,
        userId: reviewForm.userId,
        rating: Number(reviewForm.rating),
        comment: reviewForm.comment,
      });
      
      showSuccess("✅ Review created successfully!");
      
      setReviewForm({
        productId: "",
        userId: "",
        rating: "5",
        comment: "",
      });
    } catch (e) {
      showError("❌ Error: " + (e?.response?.data?.message || e.message));
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to switch form and clear messages
  const switchForm = (form) => {
    setActiveForm(form);
    setMessage("");
    setMessageType("");
  };

  return (
    <div className="create-page">
      <h2>✏️ Create Operations</h2>
      
      {/* Form Selection Buttons */}
      <div className="create-buttons">
        <button
          className={`create-btn ${activeForm === "product" ? "active" : ""}`}
          onClick={() => switchForm("product")}
        >
          📦 Create Product
        </button>
        <button
          className={`create-btn ${activeForm === "order" ? "active" : ""}`}
          onClick={() => switchForm("order")}
        >
          📋 Create Order
        </button>
        <button
          className={`create-btn ${activeForm === "review" ? "active" : ""}`}
          onClick={() => switchForm("review")}
        >
          ⭐ Create Review
        </button>
      </div>

      {/* Message Display - Auto clears after 3 seconds */}
      {message && (
        <div 
          className="message-popup"
          style={{
            padding: "12px 20px",
            borderRadius: "8px",
            marginBottom: "20px",
            fontWeight: "bold",
            backgroundColor: messageType === "success" ? "#d4edda" : "#f8d7da",
            color: messageType === "success" ? "#155724" : "#721c24",
            border: `1px solid ${messageType === "success" ? "#c3e6cb" : "#f5c6cb"}`,
            animation: "fadeOut 3s ease-in-out forwards"
          }}
        >
          {message}
        </div>
      )}

      {/* Create Product Form */}
      {activeForm === "product" && (
        <div className="create-form">
          <h3>Create New Product</h3>
          <input 
            placeholder="Name *" 
            value={productForm.name} 
            onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
          />
          <input 
            placeholder="Description" 
            value={productForm.description} 
            onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
          />
          <input 
            placeholder="Price *" 
            type="number"
            value={productForm.price} 
            onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
          />
          <input 
            placeholder="Stock *" 
            type="number"
            value={productForm.stock} 
            onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
          />
          <input 
            placeholder="Category" 
            value={productForm.category} 
            onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
          />
          <input 
            placeholder="User ID (Seller) *" 
            value={productForm.userId} 
            onChange={(e) => setProductForm({ ...productForm, userId: e.target.value })}
          />
          <input 
            placeholder='Attributes JSON (ex: {"color":"red"})' 
            value={productForm.attributes} 
            onChange={(e) => setProductForm({ ...productForm, attributes: e.target.value })}
          />
          <button onClick={onCreateProduct} disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Product"}
          </button>
        </div>
      )}

      {/* Create Order Form */}
      {activeForm === "order" && (
        <div className="create-form">
          <h3>Create New Order</h3>
          <input 
            placeholder="User ID *" 
            value={orderForm.userId} 
            onChange={(e) => setOrderForm({ ...orderForm, userId: e.target.value })}
          />
          <textarea 
            placeholder='Items JSON (ex: [{"productId":1,"quantity":2}])' 
            value={orderForm.items} 
            onChange={(e) => setOrderForm({ ...orderForm, items: e.target.value })}
            rows="4"
          />
          <select 
            value={orderForm.status} 
            onChange={(e) => setOrderForm({ ...orderForm, status: e.target.value })}
          >
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <button onClick={onCreateOrder} disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Order"}
          </button>
        </div>
      )}

      {/* Create Review Form */}
      {activeForm === "review" && (
        <div className="create-form">
          <h3>Create New Review</h3>
          <input 
            placeholder="Product ID *" 
            value={reviewForm.productId} 
            onChange={(e) => setReviewForm({ ...reviewForm, productId: e.target.value })}
          />
          <input 
            placeholder="User ID *" 
            value={reviewForm.userId} 
            onChange={(e) => setReviewForm({ ...reviewForm, userId: e.target.value })}
          />
          <select 
            value={reviewForm.rating} 
            onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}
          >
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
          <textarea 
            placeholder="Comment" 
            value={reviewForm.comment} 
            onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
            rows="3"
          />
          <button onClick={onCreateReview} disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Review"}
          </button>
        </div>
      )}

      {/* Add this CSS animation to your global CSS or InventoryManager.css */}
      <style>{`
        @keyframes fadeOut {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }
      `}</style>
    </div>
  );
}

export default CreateInventoryPage;