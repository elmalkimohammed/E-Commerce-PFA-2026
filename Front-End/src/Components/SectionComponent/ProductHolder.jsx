import ProductCard from "./ProductCard";
import { usePopularProducts } from "../../hooks/usePopularProducts";
import "../../pages/Styles/productHolder.css";

const ITEMS_PER_PAGE = 6;

function ProductHolder() {
  const { 
    products, 
    loading, 
    error, 
    currentPage, 
    totalPages, 
    nextPage, 
    prevPage, 
    goToPage,
    addToCart,
    refreshProducts 
  } = usePopularProducts(ITEMS_PER_PAGE);

  const handleAddToCart = async (productId) => {
    await addToCart(productId);
  };

  if (loading) {
    return (
      <div className="product-holder">
        <h1>Produits populaires</h1>
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Chargement des produits...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-holder">
      <h1>Produits populaires</h1>
      
      {error && (
        <div className="demo-banner">
          <p>🔧 {error}</p>
          <button onClick={refreshProducts} className="btn-retry">
            Réessayer
          </button>
        </div>
      )}

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="product-pagination" aria-label="Pagination des produits">
          <button
            type="button"
            className="pagination-btn"
            onClick={prevPage}
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
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            type="button"
            className="pagination-btn"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </nav>
      )}
    </div>
  );
}

export default ProductHolder;