import api from './api';

export const dashboardService = {
  getDashboardStats: async () => {
    try {
      const response = await api.get('/api/seller/dashboard');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      // Données par défaut
      return {
        success: false,
        data: {
          totalRevenue: { value: 12430, change: 8.2 },
          orders: { value: 284, change: 12.5 },
          productsListed: { value: 36, change: 3 },
          avgOrderValue: { value: 43.7, change: -1.4 }
        }
      };
    }
  }
};