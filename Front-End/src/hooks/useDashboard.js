import { useState, useEffect } from 'react';
import { dashboardService } from '../services/dashboardService';

export const useDashboard = () => {
  const [stats, setStats] = useState([
    { label: "Total Revenue", value: "$12,430", change: "+8.2%", icon: "DollarSign", up: true },
    { label: "Orders", value: "284", change: "+12.5%", icon: "ShoppingBag", up: true },
    { label: "Products Listed", value: "36", change: "+3", icon: "Package", up: true },
    { label: "Avg. Order Value", value: "$43.7", change: "-1.4%", icon: "TrendingUp", up: false },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      const result = await dashboardService.getDashboardStats();
      if (result.success) {
        const data = result.data;
        setStats([
          { label: "Total Revenue", value: `$${data.totalRevenue?.value || 12430}`, change: `${data.totalRevenue?.change > 0 ? '+' : ''}${data.totalRevenue?.change || 8.2}%`, icon: "DollarSign", up: (data.totalRevenue?.change || 0) >= 0 },
          { label: "Orders", value: (data.orders?.value || 284).toString(), change: `${data.orders?.change > 0 ? '+' : ''}${data.orders?.change || 12.5}%`, icon: "ShoppingBag", up: (data.orders?.change || 0) >= 0 },
          { label: "Products Listed", value: (data.productsListed?.value || 36).toString(), change: `${data.productsListed?.change > 0 ? '+' : ''}${data.productsListed?.change || 3}`, icon: "Package", up: (data.productsListed?.change || 0) >= 0 },
          { label: "Avg. Order Value", value: `$${data.avgOrderValue?.value || 43.7}`, change: `${data.avgOrderValue?.change > 0 ? '+' : ''}${data.avgOrderValue?.change || -1.4}%`, icon: "TrendingUp", up: (data.avgOrderValue?.change || 0) >= 0 },
        ]);
      }
      setLoading(false);
    };
    fetchStats();
  }, []);

  return { stats, loading };
};