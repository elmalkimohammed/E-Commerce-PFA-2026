import { useState } from "react";
import {
  createProduct,
} from "../../services/inventoryService";

function CreateInventoryPage() {
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    userId: "",
  });
  
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000);
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
        attributes: {}, // Empty attributes object
      });
      
      setMessage("✅ Product created successfully!");
      setMessageType("success");
      setProductForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        userId: "",
      });
      clearMessage();
    } catch (e) {
      setMessage("❌ Error: " + (e?.response?.data?.message || e.message));
      setMessageType("error");
      clearMessage();
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="create-page">
      <h2>Create Product</h2>

      {message && (
        <div className={`create-message ${messageType}`}>
          {message}
        </div>
      )}

      {/* Create Product Form */}
      <div className="create-form-card">
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
        <button className="create-submit-btn" onClick={onCreateProduct} disabled={isLoading}>
          {isLoading ? "Creating..." : "Add Product"}
        </button>
      </div>
    </div>
  );
}

export default CreateInventoryPage;