import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { productService } from '../services/productService';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  // Load initial results from navigation state or fetch
  useEffect(() => {
    if (location.state?.products) {
      setProducts(location.state.products);
      setCurrentPage(location.state.currentPage || 0);
      setTotalPages(location.state.totalPages || 0);
      setKeyword(location.state.keyword || '');
    } else if (location.state?.keyword) {
      setKeyword(location.state.keyword);
      fetchPage(0, location.state.keyword);
    }
  }, [location.state]);

  const fetchPage = async (page, searchKeyword = keyword) => {
    if (!searchKeyword) return;
    
    setLoading(true);
    try {
      const result = await productService.searchProducts(searchKeyword, page, 5);
      setProducts(result.products);
      setCurrentPage(page);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.error("Failed to load page:", error);
    }
    setLoading(false);
  };

  const handleNextPage = () => {
    if (currentPage + 1 < totalPages) {
      fetchPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      fetchPage(currentPage - 1);
    }
  };

  if (!keyword && !location.state?.keyword) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>Aucune recherche effectuée.</p>
        <button onClick={() => navigate('/')} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '8px 16px',
          marginBottom: '20px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Retour à l'accueil
      </button>

      <h1>Résultats pour : "{keyword || location.state?.keyword}"</h1>
      <p>{products.length} produit(s) affiché(s)</p>

      {loading && <p>Chargement...</p>}

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              backgroundColor: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3 style={{ margin: '0 0 10px 0' }}>{product.name}</h3>
            <p style={{ color: '#666', fontSize: '14px', margin: '0 0 10px 0' }}>
              {product.description?.substring(0, 100)}...
            </p>
            <strong style={{ color: '#28a745', fontSize: '18px' }}>${product.price}</strong>
          </div>
        ))}
      </div>

      
      {totalPages > 1 && (
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            style={{
              padding: '10px 20px',
              marginRight: '15px',
              backgroundColor: currentPage === 0 ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            Précédent
          </button>
          <span style={{ fontSize: '16px' }}>
            Page {currentPage + 1} / {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage + 1 >= totalPages}
            style={{
              padding: '10px 20px',
              marginLeft: '15px',
              backgroundColor: currentPage + 1 >= totalPages ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: currentPage + 1 >= totalPages ? 'not-allowed' : 'pointer'
            }}
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;