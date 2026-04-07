import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productService } from '../../services/productService';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setKeyword('');
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value.length > 1) {
      setLoading(true);
      try {
        const result = await productService.searchProducts(value, 0, 5);
        setSuggestions(result.products);
      } catch (error) {
        setSuggestions([]);
      }
      setLoading(false);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    try {
      const result = await productService.searchProducts(keyword, 0, 5);
      
      navigate('/search', {
        state: {
          products: result.products,
          keyword: keyword,
          currentPage: 0,
          totalPages: result.totalPages
        }
      });

      setIsOpen(false);
      setKeyword('');
      setSuggestions([]);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setIsOpen(false);
    setKeyword('');
    setSuggestions([]);
  };

  return (
    <div ref={searchRef} style={{ position: 'relative', display: 'inline-block' }}>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#333'
        }}
      >
        🔍
      </button>

      
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: '0',
            marginTop: '8px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            width: '320px',
            zIndex: 1000,
            overflow: 'hidden'
          }}
        >
          <form onSubmit={handleSearch} style={{ display: 'flex', borderBottom: '1px solid #eee' }}>
            <input
              type="text"
              value={keyword}
              onChange={handleInputChange}
              placeholder="Rechercher un produit..."
              autoFocus
              style={{
                flex: 1,
                padding: '12px',
                border: 'none',
                outline: 'none',
                fontSize: '14px'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '8px 12px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '18px',
                color: '#007bff'
              }}
            >
              🔍
            </button>
          </form>

          {loading && (
            <div style={{ padding: '12px', textAlign: 'center', color: '#666' }}>
              Chargement...
            </div>
          )}

          {!loading && suggestions.length > 0 && (
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {suggestions.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  style={{
                    padding: '10px 12px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #f0f0f0',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8f9fa')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                >
                  <div style={{ fontWeight: '500', fontSize: '14px' }}>{product.name}</div>
                  <div style={{ fontSize: '12px', color: '#28a745' }}>${product.price}</div>
                </div>
              ))}
              <div
                onClick={handleSearch}
                style={{
                  padding: '10px 12px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: '#f8f9fa',
                  color: '#007bff',
                  fontSize: '13px',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e9ecef')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f8f9fa')}
              >
                Voir tous les résultats pour "{keyword}"
              </div>
            </div>
          )}

          {!loading && keyword.length > 1 && suggestions.length === 0 && (
            <div style={{ padding: '12px', textAlign: 'center', color: '#666' }}>
              Aucun produit trouvé pour "{keyword}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;