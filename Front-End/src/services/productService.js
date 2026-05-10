import axios from 'axios';//


const API_BASE_URL = 'http://localhost:8082';

export const productService = {

  searchProducts: async (keyword, page = 0, size = 5) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/products/search`, {
        params: { keyword, page, size }
      });
      return {
        products: response.data.products || response.data.content || [],
        currentPage: response.data.currentPage || response.data.number || 0,
        totalPages: response.data.totalPages || 0,
        totalElements: response.data.totalElements || 0
      };
    } catch (error) {
      console.error("Search API error:", error);
      throw error;
    }
  },

  getProductById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Get product error:", error);
      throw error;
    }
  }
};