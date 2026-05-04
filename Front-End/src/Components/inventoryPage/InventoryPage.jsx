import { useState, useEffect } from "react";
import { getAllProducts, getAllOrders, getAllCarts, getAllReviews } from "../../services/inventoryService";
import DataTable from "./DataTable";

function InventoryPage({ currentTable, onTableChange }) {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [carts, setCarts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [categories, setCategories] = useState([]);
  const [userEmails, setUserEmails] = useState({});

  // Get unique categories from products
  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = [...new Set(products.map(p => p.category).filter(c => c))];
      setCategories(uniqueCategories);
    }
  }, [products]);

  // Fetch user emails for all product sellers
  useEffect(() => {
    const fetchUserEmails = async () => {
      const uniqueUserIds = [...new Set(products.map(p => p.userId).filter(id => id))];
      const emails = {};
      
      for (const userId of uniqueUserIds) {
        try {
          // Try to fetch from AuthService or UserProfileService
          const response = await fetch(`http://localhost:5001/api/auth/users/${userId}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("generatedJWT_Token")}`
            }
          });
          if (response.ok) {
            const userData = await response.json();
            emails[userId] = userData.email || userData.userEmail || userId;
          } else {
            // Fallback: use userId if email not found
            emails[userId] = userId;
          }
        } catch (error) {
          console.error(`Failed to fetch user email for ${userId}:`, error);
          emails[userId] = userId;
        }
      }
      setUserEmails(emails);
    };

    if (products.length > 0) {
      fetchUserEmails();
    }
  }, [products]);

  // Apply category filter
  const filteredProducts = categoryFilter
    ? products.filter(p => p.category === categoryFilter)
    : products;

  // Enhance products with user emails
  const enhancedProducts = filteredProducts.map(product => ({
    ...product,
    userEmail: userEmails[product.userId] || product.userId
  }));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (currentTable === "products") {
          const data = await getAllProducts();
          setProducts(data);
        } else if (currentTable === "orders") {
          const data = await getAllOrders();
          setOrders(data);
        } else if (currentTable === "carts") {
          const data = await getAllCarts();
          setCarts(data);
        } else if (currentTable === "reviews") {
          const data = await getAllReviews();
          setReviews(data);
        }
      } catch (e) {
        console.error("Error fetching data:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentTable, refresh]);

  const getCurrentData = () => {
    if (currentTable === "products") return enhancedProducts;
    if (currentTable === "orders") return orders;
    if (currentTable === "carts") return carts;
    if (currentTable === "reviews") return reviews;
    return [];
  };

  const getTableTitle = () => {
    if (currentTable === "products") return "Products Management";
    if (currentTable === "orders") return "Orders Management";
    if (currentTable === "carts") return "Carts Management";
    if (currentTable === "reviews") return "Reviews Management";
    return "Data Management";
  };

  const tableButtons = [
    { id: "products", label: "📦 Products" },
    { id: "orders", label: "📋 Orders" },
    { id: "carts", label: "🛒 Carts" },
    { id: "reviews", label: "⭐ Reviews" },
  ];

  return (
    <div className="inventory-page">
      {/* Category Filter - Only for Products */}
      {currentTable === "products" && categories.length > 0 && (
        <div className="category-filter">
          <label>🔍 Filter by Category: </label>
          <select 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="category-select"
          >
            <option value="">📋 All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <span className="filter-result">
            Showing {filteredProducts.length} of {products.length} products
          </span>
        </div>
      )}

      <div className="table-header">
        <h2>{getTableTitle()}</h2>
        <p className="table-count">Total: {getCurrentData().length} items</p>
      </div>
      
      {loading && <p>Loading...</p>}
      {!loading && (
        <DataTable 
          currentPage={currentTable}
          data={getCurrentData()}
          onRefresh={() => setRefresh(!refresh)}
        />
      )}
    </div>
  );
}

export default InventoryPage;