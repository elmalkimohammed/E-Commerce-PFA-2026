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

  // Get unique categories from products
  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = [...new Set(products.map(p => p.category).filter(c => c))];
      setCategories(uniqueCategories);
    }
  }, [products]);

  // Apply category filter
  const filteredProducts = categoryFilter
    ? products.filter(p => p.category === categoryFilter)
    : products;

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
    if (currentTable === "products") return filteredProducts;
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