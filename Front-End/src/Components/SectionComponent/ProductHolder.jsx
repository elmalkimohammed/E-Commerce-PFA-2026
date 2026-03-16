import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../../pages/Styles/productHolder.css";

const ITEMS_PER_PAGE = 6;

function ProductHolder() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Base URL for your microservice
  const API_BASE_URL = "http://localhost:5002/TechStore/ProductService";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // You can also fetch latest products
  const fetchLatestProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/latest`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (err) {
      console.error("Error fetching latest products:", err);
    }
  };

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (loading) {
    return <div className="product-holder">Loading products...</div>;
  }

  if (error) {
    return <div className="product-holder error">{error}</div>;
  }

  return (
    <div className="product-holder">
      <h1>Produits populaires</h1>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <>
          <div className="product-grid">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {totalPages > 1 && (
            <nav className="product-pagination" aria-label="Pagination des produits">
              <button
                type="button"
                className="pagination-btn"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Précédent
              </button>
              <div className="pagination-pages">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    className={`pagination-page ${currentPage === page ? "active" : ""}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="pagination-btn"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Suivant
              </button>
            </nav>
          )}
        </>
      )}
    </div>
  );
}

export default ProductHolder;