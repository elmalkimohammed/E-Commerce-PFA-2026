import { useState } from "react";
import Analytics from "../components/SellerPortal/Analytics";
import ProductTable from "../components/SellerPortal/ProductTable";
import AddProductForm from "../components/SellerPortal/AddProductForm";
import EditProductModal from "../components/SellerPortal/EditProductModal";
import TopNav from "../Components/navbarComponent/TopNav";
import { useProducts } from "../hooks/useProducts";
import { useDashboard } from "../hooks/useDashboard";

import "./styles/SellerPortal.css";

export default function SellerPortal() {
  const { products, loading, error, categories, addProduct, updateProduct, deleteProduct } = useProducts();
  const { stats, loading: statsLoading } = useDashboard();
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = async (product) => {
    await addProduct(product);
  };

  const handleSaveEdit = async (updatedProduct) => {
    const result = await updateProduct(updatedProduct.id, updatedProduct);
    if (result.success) {
      setEditingProduct(null);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce produit?")) {
      await deleteProduct(id);
    }
  };

  if (error) {
    return (
      <>
        <TopNav/>
        <div className="seller-portal">
          <div className="portal-header">
            <h1 className="portal-title">Seller Portal</h1>
            <p className="portal-subtitle">Gérez vos produits et suivez vos performances</p>
          </div>
          <div className="error-container">
            <h2>Mode Démonstration</h2>
            <p>Le backend n'est pas accessible. Affichage des données de démonstration.</p>
          </div>
          <Analytics stats={stats} loading={statsLoading} />
          <ProductTable products={products} loading={loading} onEdit={setEditingProduct} onDelete={handleDelete} />
          <AddProductForm onAddProduct={handleAddProduct} categories={categories} />
          {editingProduct && (
            <EditProductModal product={editingProduct} onSave={handleSaveEdit} onClose={() => setEditingProduct(null)} categories={categories} />
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <TopNav/>
      <div className="seller-portal">
        <div className="portal-header">
          <h1 className="portal-title">Seller Portal</h1>
          <p className="portal-subtitle">Gérez vos produits et suivez vos performances</p>
        </div>
        <Analytics stats={stats} loading={statsLoading} />
        <ProductTable products={products} loading={loading} onEdit={setEditingProduct} onDelete={handleDelete} />
        <AddProductForm onAddProduct={handleAddProduct} categories={categories} />
        {editingProduct && (
          <EditProductModal product={editingProduct} onSave={handleSaveEdit} onClose={() => setEditingProduct(null)} categories={categories} />
        )}
      </div>
    </>
  );
}