import { useState } from "react";
import Analytics from "../components/SellerPortal/Analytics";
import ProductTable from "../components/SellerPortal/ProductTable";
import AddProductForm from "../components/SellerPortal/AddProductForm";
import EditProductModal from "../components/SellerPortal/EditProductModal";
import TopNav from "../Components/navbarComponent/TopNav";

import "./styles/SellerPortal.css";

// Mock data — replace with API calls later
const MOCK_PRODUCTS = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: "79.99", stock: 14 },
  { id: 2, name: "Running Shoes", category: "Sports", price: "59.99", stock: 3 },
  { id: 3, name: "Coffee Maker", category: "Home & Garden", price: "49.99", stock: 22 },
];

export default function SellerPortal() {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
  };

  const handleSaveEdit = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <>
    <TopNav/>
    <div className="seller-portal">
      <div className="portal-header">
        <h1 className="portal-title">Seller Portal</h1>
        <p className="portal-subtitle">Manage your products and track performance</p>
      </div>

      <Analytics />

      <ProductTable
        products={products}
        onEdit={setEditingProduct}
        onDelete={handleDelete}
      />

      <AddProductForm onAddProduct={handleAddProduct} />

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onSave={handleSaveEdit}
          onClose={() => setEditingProduct(null)}
        />
      )}
    </div>
    </>
  );
}
