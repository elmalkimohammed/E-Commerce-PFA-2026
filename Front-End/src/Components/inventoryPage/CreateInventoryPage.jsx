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
  const [messageType, setMessageType] = useState("");
  const [activeForm, setActiveForm] = useState("product");
  const [isLoading, setIsLoading] = useState(false);

  const clearMessage = () => {
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

  const onCreateProduct = async () => {
    if (!productForm.name || !productForm.price || !productForm.stock || !productForm.userId) {
      setMessage("Please fill all required fields");
      setMessageType("error");
      clearMessage();
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
      
      setMessage("Product created successfully!");
      setMessageType("success");
      setProductForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        userId: "",
        attributes: "{}",
      });
      clearMessage();
    } catch (e) {
      setMessage("Error: " + (e?.response?.data?.message || e.message));
      setMessageType("error");
      clearMessage();
    } finally {
      setIsLoading(false);
    }
  };

  const onCreateOrder = async () => {
    if (!orderForm.userId) {
      setMessage("Please fill User ID");
      setMessageType("error");
      clearMessage();
      return;
    }

    setIsLoading(true);
    try {
      await createOrder({
        userId: orderForm.userId,
        items: parseItems(orderForm.items),
        status: orderForm.status,
      });
      
      setMessage("Order created successfully!");
      setMessageType("success");
      setOrderForm({
        userId: "",
        items: "[]",
        status: "Pending",
      });
      clearMessage();
    } catch (e) {
      setMessage("Error: " + (e?.response?.data?.message || e.message));
      setMessageType("error");
      clearMessage();
    } finally {
      setIsLoading(false);
    }
  };

  const onCreateReview = async () => {
    if (!reviewForm.productId || !reviewForm.userId) {
      setMessage("Please fill Product ID and User ID");
      setMessageType("error");
      clearMessage();
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
      
      setMessage("Review created successfully!");
      setMessageType("success");
      setReviewForm({
        productId: "",
        userId: "",
        rating: "5",
        comment: "",
      });
      clearMessage();
    } catch (e) {
      setMessage("Error: " + (e?.response?.data?.message || e.message));
      setMessageType("error");
      clearMessage();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create-page">
      <h2>Create Operations</h2>
      
      {/* Form Selection Buttons */}
      <div className="create-tabs">
        <button
          className={`create-tab ${activeForm === "product" ? "active" : ""}`}
          onClick={() => setActiveForm("product")}
        >
          Create Product
        </button>
        <button
          className={`create-tab ${activeForm === "order" ? "active" : ""}`}
          onClick={() => setActiveForm("order")}
        >
          Create Order
        </button>
        <button
          className={`create-tab ${activeForm === "review" ? "active" : ""}`}
          onClick={() => setActiveForm("review")}
        >
          Create Review
        </button>
      </div>

      {/* Message */}
      {message && (
        <div className={`create-message ${messageType}`}>
          {message}
        </div>
      )}

      {/* Create Product Form */}
      {activeForm === "product" && (
        <div className="create-form-card">
          <h3>Create New Product</h3>
          <div className="create-form-group">
            <label>Name *</label>
            <input 
              type="text"
              placeholder="Product name"
              value={productForm.name} 
              onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
            />
          </div>
          <div className="create-form-group">
            <label>Description</label>
            <textarea 
              placeholder="Product description"
              value={productForm.description} 
              onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
              rows="3"
            />
          </div>
          <div className="create-form-row">
            <div className="create-form-group">
              <label>Price *</label>
              <input 
                type="number"
                placeholder="0.00"
                value={productForm.price} 
                onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
              />
            </div>
            <div className="create-form-group">
              <label>Stock *</label>
              <input 
                type="number"
                placeholder="0"
                value={productForm.stock} 
                onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
              />
            </div>
          </div>
          <div className="create-form-group">
            <label>Category</label>
            <input 
              type="text"
              placeholder="Category"
              value={productForm.category} 
              onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
            />
          </div>
          <div className="create-form-group">
            <label>User ID (Seller) *</label>
            <input 
              type="text"
              placeholder="Seller user ID"
              value={productForm.userId} 
              onChange={(e) => setProductForm({ ...productForm, userId: e.target.value })}
            />
          </div>
          <div className="create-form-group">
            <label>Attributes (JSON)</label>
            <input 
              type="text"
              placeholder='{"color":"red"}'
              value={productForm.attributes} 
              onChange={(e) => setProductForm({ ...productForm, attributes: e.target.value })}
            />
          </div>
          <button className="create-submit-btn" onClick={onCreateProduct} disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Product"}
          </button>
        </div>
      )}

      {/* Create Order Form */}
      {activeForm === "order" && (
        <div className="create-form-card">
          <h3>Create New Order</h3>
          <div className="create-form-group">
            <label>User ID *</label>
            <input 
              type="text"
              placeholder="User ID"
              value={orderForm.userId} 
              onChange={(e) => setOrderForm({ ...orderForm, userId: e.target.value })}
            />
          </div>
          <div className="create-form-group">
            <label>Items (JSON)</label>
            <textarea 
              placeholder='[{"productId":1,"quantity":2}]'
              value={orderForm.items} 
              onChange={(e) => setOrderForm({ ...orderForm, items: e.target.value })}
              rows="4"
            />
          </div>
          <div className="create-form-group">
            <label>Status</label>
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
          </div>
          <button className="create-submit-btn" onClick={onCreateOrder} disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Order"}
          </button>
        </div>
      )}

      {/* Create Review Form */}
      {activeForm === "review" && (
        <div className="create-form-card">
          <h3>Create New Review</h3>
          <div className="create-form-row">
            <div className="create-form-group">
              <label>Product ID *</label>
              <input 
                type="text"
                placeholder="Product ID"
                value={reviewForm.productId} 
                onChange={(e) => setReviewForm({ ...reviewForm, productId: e.target.value })}
              />
            </div>
            <div className="create-form-group">
              <label>User ID *</label>
              <input 
                type="text"
                placeholder="User ID"
                value={reviewForm.userId} 
                onChange={(e) => setReviewForm({ ...reviewForm, userId: e.target.value })}
              />
            </div>
          </div>
          <div className="create-form-group">
            <label>Rating</label>
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
          </div>
          <div className="create-form-group">
            <label>Comment</label>
            <textarea 
              placeholder="Your review comment"
              value={reviewForm.comment} 
              onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
              rows="3"
            />
          </div>
          <button className="create-submit-btn" onClick={onCreateReview} disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Review"}
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateInventoryPage;