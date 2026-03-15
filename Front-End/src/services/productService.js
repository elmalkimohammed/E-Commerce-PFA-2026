import api from './api';

export const productService = {
  // Récupérer tous les produits
  getSellerProducts: async () => {
    try {
      const response = await api.get('/api/seller/products');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Erreur chargement produits:', error);
      return {
        success: false,
        error: "Impossible de charger les produits. Vérifiez que le backend est lancé."
      };
    }
  },

  // Ajouter un produit
  addProduct: async (productData) => {
    try {
      const response = await api.post('/api/seller/products', productData);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Erreur lors de l'ajout"
      };
    }
  },

  // Modifier un produit
  updateProduct: async (id, productData) => {
    try {
      const response = await api.put(`/api/seller/products/${id}`, productData);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Erreur lors de la modification"
      };
    }
  },

  // Supprimer un produit
  deleteProduct: async (id) => {
    try {
      await api.delete(`/api/seller/products/${id}`);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Erreur lors de la suppression"
      };
    }
  },

  // Récupérer les catégories
  getCategories: async () => {
    try {
      const response = await api.get('/api/categories');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        data: ["Electronics", "Clothing", "Home & Garden", "Books", "Sports", "Toys", "Food", "Other"]
      };
    }
  }
};