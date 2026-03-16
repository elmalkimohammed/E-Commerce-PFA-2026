import { useState, useEffect, useCallback } from 'react';
import { popularProductService } from '../services/popularProductService';

export const usePopularProducts = (itemsPerPage = 6) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const result = await popularProductService.getPopularProducts();
    
    if (result.data) {
      setAllProducts(result.data);
      
      // Pagination
      const startIndex = (currentPage - 1) * itemsPerPage;
      const paginated = result.data.slice(startIndex, startIndex + itemsPerPage);
      setProducts(paginated);
      
      if (!result.success) {
        setError('Mode démonstration: API non accessible');
      } else {
        setError(null);
      }
    } else {
      setError('Erreur de chargement des produits');
    }
    setLoading(false);
  }, [currentPage, itemsPerPage]);

  const addToCart = async (productId) => {
    const result = await popularProductService.addToCart(productId);
    if (result.success) {
      alert('✅ Produit ajouté au panier avec succès!');
      return { success: true };
    } else {
      alert('❌ ' + (result.error || "Erreur lors de l'ajout au panier"));
      return { success: false, error: result.error };
    }
  };

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  // Mettre à jour les produits quand la page change
  useEffect(() => {
    if (allProducts.length > 0) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const paginated = allProducts.slice(startIndex, startIndex + itemsPerPage);
      setProducts(paginated);
    }
  }, [currentPage, allProducts, itemsPerPage]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    allProducts,
    loading,
    error,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    addToCart,
    refreshProducts: fetchProducts
  };
};