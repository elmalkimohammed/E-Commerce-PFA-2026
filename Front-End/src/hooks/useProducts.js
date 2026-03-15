import { useState, useEffect, useCallback } from 'react';
import { productService } from '../services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const result = await productService.getSellerProducts();
    
    if (result.success) {
      setProducts(result.data);
      setError(null);
    } else {
      setError(result.error);
      // Données de secours pour le développement
      setProducts([
        { id: 1, name: "Wireless Headphones", category: "Electronics", price: "79.99", stock: "14", description: "High quality wireless headphones" },
        { id: 2, name: "Running Shoes", category: "Sports", price: "59.99", stock: "3", description: "Comfortable running shoes" },
        { id: 3, name: "Coffee Maker", category: "Home & Garden", price: "49.99", stock: "22", description: "Automatic coffee machine" },
      ]);
    }
    setLoading(false);
  }, []);

  const fetchCategories = useCallback(async () => {
    const result = await productService.getCategories();
    setCategories(result.data);
  }, []);

  const addProduct = async (productData) => {
    const result = await productService.addProduct(productData);
    if (result.success) {
      setProducts(prev => [...prev, result.data]);
      return { success: true };
    }
    return { success: false, error: result.error };
  };

  const updateProduct = async (id, productData) => {
    const result = await productService.updateProduct(id, productData);
    if (result.success) {
      setProducts(prev => prev.map(p => p.id === id ? result.data : p));
      return { success: true };
    }
    return { success: false, error: result.error };
  };

  const deleteProduct = async (id) => {
    const result = await productService.deleteProduct(id);
    if (result.success) {
      setProducts(prev => prev.filter(p => p.id !== id));
      return { success: true };
    }
    return { success: false, error: result.error };
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  return {
    products,
    loading,
    error,
    categories,
    addProduct,
    updateProduct,
    deleteProduct,
    refreshProducts: fetchProducts
  };
};