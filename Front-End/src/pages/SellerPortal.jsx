import { useState, useEffect } from "react";
import Analytics from "../Components/SellerPortal/Analytics";
import ProductTable from "../Components/SellerPortal/ProductTable";
import AddProductForm from "../Components/SellerPortal/AddProductForm";
import EditProductModal from "../Components/SellerPortal/EditProductModal";
import TopNav from "../Components/navbarComponent/TopNav";

import "./Styles/SellerPortal.css";

// API Base URL - update this with your actual API URL
const API_BASE_URL = "http://localhost/TechStore/ProductService/";

// Helper function to get token from localStorage/sessionStorage
const getToken = () => {
  return localStorage.getItem('generatedJWT_Token');
};

// Helper function to decode JWT and get user ID from sub claim
const getUserIdFromToken = () => {
  const token = getToken();
  if (!token) return null;
  
  try {
    // Split the token and get the payload part
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    const payload = JSON.parse(jsonPayload);
    return payload.sub; // The user ID from the sub claim
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export default function SellerPortal() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [analyticsData, setAnalyticsData] = useState({
    totalRevenue: "$0",
    totalOrders: "0",
    productsListed: "0",
    avgOrderValue: "$0"
  });

  // Check authentication and fetch products on component mount
  useEffect(() => {
    const token = getToken();
    const userId = getUserIdFromToken();
    
    if (!token || !userId) {
      setError("Please log in to access the seller portal");
      setLoading(false);
      return;
    }
    
    fetchProducts();
  }, []);

  // Update analytics whenever products change
  useEffect(() => {
    if (products.length > 0) {
      calculateAnalytics();
    } else {
      // Reset analytics if no products
      setAnalyticsData({
        totalRevenue: "$0",
        totalOrders: "0",
        productsListed: "0",
        avgOrderValue: "$0"
      });
    }
  }, [products]);

  const getAuthHeaders = (includeContentType = true) => {
    const token = getToken();
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    
    if (includeContentType) {
      headers['Content-Type'] = 'application/json';
    }
    
    return headers;
  };

  const fetchProducts = async () => {
    const userId = getUserIdFromToken();
    if (!userId) {
      setError("User ID not found in token");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/user/${userId}`, {
        headers: getAuthHeaders()
      });

      if (response.status === 401) {
        setError("Your session has expired. Please log in again.");
        setLoading(false);
        return;
      }

      if (!response.ok) {
        if (response.status === 404) {
          setProducts([]);
          setLoading(false);
          return;
        }
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const calculateAnalytics = () => {
    const totalRevenue = products.reduce((sum, product) => 
      sum + (parseFloat(product.price) * product.stock), 0
    );
    
    const productsListed = products.length;
    // Mock orders data - in real app, fetch from orders API
    const totalOrders = Math.floor(Math.random() * 100) + 50;
    const avgOrderValue = productsListed > 0 ? totalRevenue / totalOrders : 0;

    setAnalyticsData({
      totalRevenue: `$${totalRevenue.toFixed(2)}`,
      totalOrders: totalOrders.toString(),
      productsListed: productsListed.toString(),
      avgOrderValue: `$${avgOrderValue.toFixed(2)}`
    });
  };

  const uploadImage = (file, productId) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = e.target.result.split(',')[1];
        try {
          const res = await fetch(`${API_BASE_URL}/AddImage`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify({
              product_Id: productId,
              image: base64,
              mimetype: file.type,
              filename: file.name
            })
          });
          if (!res.ok) throw new Error('Image upload failed');
          resolve();
        } catch (err) { reject(err); }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleAddProduct = async (productData) => {
    const userId = getUserIdFromToken();
    if (!userId) { setError("Authentication required"); return; }
    setError(null);

    try {
      const productPayload = {
        name: productData.name,
        description: productData.description,
        price: parseFloat(productData.price),
        stock: parseInt(productData.stock),
        category: productData.category,
        attributes: productData.attributes,
        userId: userId
      };

      const productResponse = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(productPayload)
      });

      if (productResponse.status === 401) { setError("Your session has expired. Please log in again."); return; }
      if (!productResponse.ok) throw new Error('Failed to add product');

      // Parse the new product ID from the response (requires backend restart after last change)
      const responseText = await productResponse.text();
      const newProductId = responseText ? JSON.parse(responseText).id : null;

      if (newProductId && productData.images?.length > 0) {
        for (const img of productData.images) {
          if (img.file) await uploadImage(img.file, newProductId);
        }
      } else if (!newProductId && productData.images?.length > 0) {
        setError("Product created but images were not uploaded — please restart the ProductService backend.");
      }

      await fetchProducts();
    } catch (err) {
      setError(err.message);
      console.error('Error adding product:', err);
    }
  };

  const handleSaveEdit = async (updatedProduct) => {
    const userId = getUserIdFromToken();
    if (!userId) { setError("Authentication required"); return; }
    setError(null);

    try {
      const productPayload = {
        id: updatedProduct.id,
        name: updatedProduct.name,
        description: updatedProduct.description,
        price: parseFloat(updatedProduct.price),
        stock: parseInt(updatedProduct.stock),
        category: updatedProduct.category,
        attributes: updatedProduct.attributes,
        userId: userId
      };

      const response = await fetch(API_BASE_URL, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(productPayload)
      });

      if (response.status === 401) { setError("Your session has expired. Please log in again."); return; }
      if (!response.ok) throw new Error('Failed to update product');

      // Delete images the user removed in the modal
      const keptIds = new Set(
        (updatedProduct.images || []).filter(img => img.id_Image).map(img => img.id_Image)
      );
      for (const orig of (editingProduct?.images || [])) {
        if (!keptIds.has(orig.id_Image)) {
          await fetch(`${API_BASE_URL}/DeleteImage/${orig.id_Image}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
          });
        }
      }

      // Upload new images the user added in the modal
      for (const img of (updatedProduct.images || [])) {
        if (img.file) await uploadImage(img.file, updatedProduct.id);
      }

      await fetchProducts();
      setEditingProduct(null);
    } catch (err) {
      setError(err.message);
      console.error('Error updating product:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      if (response.status === 401) {
        setError("Your session has expired. Please log in again.");
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      await fetchProducts();
    } catch (err) {
      setError(err.message);
      console.error('Error deleting product:', err);
    }
  };

  const handleLoginRedirect = () => {
    window.location.href = '/Authentication';
  };

  // Show loading state
  if (loading) {
    return (
      <>
        <TopNav />
        <div className="seller-portal">
          <div className="portal-header">
            <h1 className="portal-title">Seller Portal</h1>
            <p className="portal-subtitle">Loading your products...</p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Loading...
          </div>
        </div>
      </>
    );
  }

  // Show error state
  if (error) {
    return (
      <>
        <TopNav />
        <div className="seller-portal">
          <div className="portal-header">
            <h1 className="portal-title">Seller Portal</h1>
            <p className="portal-subtitle">Error loading portal</p>
          </div>
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem', 
            backgroundColor: '#fee', 
            margin: '1rem',
            borderRadius: '8px',
            border: '1px solid #fcc'
          }}>
            <p style={{ color: '#c00', marginBottom: '1rem' }}>{error}</p>
            {error.includes('log in') && (
              <button 
                onClick={handleLoginRedirect}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#c00',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Go to Login
              </button>
            )}
          </div>
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
          <p className="portal-subtitle">Manage your products and track performance</p>
        </div>

        <Analytics data={analyticsData} />

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
