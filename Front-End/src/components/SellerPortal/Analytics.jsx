import { TrendingUp, ShoppingBag, DollarSign, Package } from "lucide-react";

export default function Analytics({ data }) {
  const stats = [
    { 
      label: "Total Revenue", 
      value: data?.totalRevenue || "0", 
       
      icon: DollarSign, 
      up: true 
    },
    { 
      label: "Orders", 
      value: data?.totalOrders || "284", 
      
      icon: ShoppingBag, 
      up: true 
    },
    { 
      label: "Products Listed", 
      value: data?.productsListed || "36", 
      change: "+" + (data?.productsListed || "3"), 
      icon: Package, 
      up: true 
    },
  ];

  return (
    <section className="analytics-section">
      <h2 className="section-title">Analytics Overview</h2>
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="stat-card">
              <div className="stat-icon">
                <Icon size={20} />
              </div>
              <div className="stat-info">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
                
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}