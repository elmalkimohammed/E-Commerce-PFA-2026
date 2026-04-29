import { useState } from "react";
import {
  cancelOrder,
  createProduct,
  createReview,
  deleteProduct,
  deleteReview,
  updateOrderStatus,
  updateProduct,
  updateReview,
} from "../../services/inventoryService";

function InventoryCrud() {
  const [productForm, setProductForm] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    userId: "",
    attributes: "{}",
  });
  const [orderForm, setOrderForm] = useState({ orderId: "", status: "Pending" });
  const [reviewForm, setReviewForm] = useState({
    reviewId: "",
    productId: "",
    userId: "",
    rating: "5",
    comment: "",
  });
  const [message, setMessage] = useState("");

  const parseAttributes = (value) => {
    try {
      return JSON.parse(value || "{}");
    } catch {
      return {};
    }
  };

  const onCreateProduct = async () => {
    await createProduct({
      name: productForm.name,
      description: productForm.description,
      price: Number(productForm.price),
      stock: Number(productForm.stock),
      category: productForm.category,
      userId: productForm.userId,
      attributes: parseAttributes(productForm.attributes),
    });
    setMessage("Produit cree avec succes.");
  };

  const onUpdateProduct = async () => {
    await updateProduct({
      id: Number(productForm.id),
      name: productForm.name,
      description: productForm.description,
      price: Number(productForm.price),
      stock: Number(productForm.stock),
      category: productForm.category,
      userId: productForm.userId,
      attributes: parseAttributes(productForm.attributes),
    });
    setMessage("Produit modifie avec succes.");
  };

  const onDeleteProduct = async () => {
    await deleteProduct(Number(productForm.id));
    setMessage("Produit supprime avec succes.");
  };

  const onUpdateOrderStatus = async () => {
    await updateOrderStatus(orderForm.orderId, orderForm.status);
    setMessage("Status de commande mis a jour.");
  };

  const onCancelOrder = async () => {
    await cancelOrder(orderForm.orderId);
    setMessage("Commande annulee.");
  };

  const onCreateReview = async () => {
    await createReview({
      productId: reviewForm.productId,
      userId: reviewForm.userId,
      rating: Number(reviewForm.rating),
      comment: reviewForm.comment,
    });
    setMessage("Review creee avec succes.");
  };

  const onUpdateReview = async () => {
    await updateReview(reviewForm.reviewId, {
      rating: Number(reviewForm.rating),
      comment: reviewForm.comment,
    });
    setMessage("Review modifiee avec succes.");
  };

  const onDeleteReview = async () => {
    await deleteReview(reviewForm.reviewId);
    setMessage("Review supprimee avec succes.");
  };

  const runAction = async (fn) => {
    try {
      setMessage("");
      await fn();
    } catch (e) {
      setMessage(e?.response?.data?.message || "Operation echouee.");
    }
  };

  return (
    <div style={{ width: "100%", marginTop: "18px", borderTop: "2px solid #143a63", paddingTop: "14px" }}>
      <h2>Section CRUD</h2>
      {message && <p style={{ fontWeight: "bold" }}>{message}</p>}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
        <div style={{ border: "1px solid #d0d7de", borderRadius: "10px", padding: "12px" }}>
          <h3>Produits</h3>
          <input placeholder="Id (pour update/delete)" value={productForm.id} onChange={(e) => setProductForm({ ...productForm, id: e.target.value })} />
          <input placeholder="Nom" value={productForm.name} onChange={(e) => setProductForm({ ...productForm, name: e.target.value })} />
          <input placeholder="Description" value={productForm.description} onChange={(e) => setProductForm({ ...productForm, description: e.target.value })} />
          <input placeholder="Prix" value={productForm.price} onChange={(e) => setProductForm({ ...productForm, price: e.target.value })} />
          <input placeholder="Stock" value={productForm.stock} onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })} />
          <input placeholder="Categorie" value={productForm.category} onChange={(e) => setProductForm({ ...productForm, category: e.target.value })} />
          <input placeholder="UserId vendeur" value={productForm.userId} onChange={(e) => setProductForm({ ...productForm, userId: e.target.value })} />
          <input placeholder='Attributes JSON, ex: {"color":"red"}' value={productForm.attributes} onChange={(e) => setProductForm({ ...productForm, attributes: e.target.value })} />
          <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
            <button onClick={() => runAction(onCreateProduct)}>Create</button>
            <button onClick={() => runAction(onUpdateProduct)}>Update</button>
            <button onClick={() => runAction(onDeleteProduct)}>Delete</button>
          </div>
        </div>

        <div style={{ border: "1px solid #d0d7de", borderRadius: "10px", padding: "12px" }}>
          <h3>Ordres</h3>
          <input placeholder="OrderId" value={orderForm.orderId} onChange={(e) => setOrderForm({ ...orderForm, orderId: e.target.value })} />
          <select value={orderForm.status} onChange={(e) => setOrderForm({ ...orderForm, status: e.target.value })}>
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
          <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
            <button onClick={() => runAction(onUpdateOrderStatus)}>Update Status</button>
            <button onClick={() => runAction(onCancelOrder)}>Cancel</button>
          </div>
        </div>

        <div style={{ border: "1px solid #d0d7de", borderRadius: "10px", padding: "12px" }}>
          <h3>Reviews</h3>
          <input placeholder="ReviewId (update/delete)" value={reviewForm.reviewId} onChange={(e) => setReviewForm({ ...reviewForm, reviewId: e.target.value })} />
          <input placeholder="ProductId (create)" value={reviewForm.productId} onChange={(e) => setReviewForm({ ...reviewForm, productId: e.target.value })} />
          <input placeholder="UserId (create)" value={reviewForm.userId} onChange={(e) => setReviewForm({ ...reviewForm, userId: e.target.value })} />
          <input placeholder="Rating 1-5" value={reviewForm.rating} onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })} />
          <input placeholder="Comment" value={reviewForm.comment} onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })} />
          <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
            <button onClick={() => runAction(onCreateReview)}>Create</button>
            <button onClick={() => runAction(onUpdateReview)}>Update</button>
            <button onClick={() => runAction(onDeleteReview)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryCrud;
