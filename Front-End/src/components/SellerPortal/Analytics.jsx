import { TrendingUp, ShoppingBag, DollarSign, Package } from "lucide-react";

export default function Analytics({ data }) {
  const stats = [
    { 
      label: "Total Revenue", 
      value: data?.totalRevenue || "$12,430", 
      change: "+8.2%", 
      icon: DollarSign, 
      up: true 
    },
    { 
      label: "Orders", 
      value: data?.totalOrders || "284", 
      change: "+12.5%", 
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
    { 
      label: "Avg. Order Value", 
      value: data?.avgOrderValue || "$43.7", 
      change: "+2.3%", 
      icon: TrendingUp, 
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
                <span className={`stat-change ${stat.up ? "up" : "down"}`}>
                  {stat.change} this month
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}