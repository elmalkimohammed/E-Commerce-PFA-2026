import { TrendingUp, ShoppingBag, DollarSign, Package } from "lucide-react";

const iconMap = {
  DollarSign: DollarSign,
  ShoppingBag: ShoppingBag,
  Package: Package,
  TrendingUp: TrendingUp
};

export default function Analytics({ stats, loading }) {
  return (
    <section className="analytics-section">
      <h2 className="section-title">Analytics Overview</h2>
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = iconMap[stat.icon] || DollarSign;
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