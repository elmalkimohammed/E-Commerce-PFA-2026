import "../../pages/Styles/TopNavStyle.css";

function TopNav() {
  return (
    <nav className="top-nav">
      <p className="brand">TechStore</p>

      <div className="redirect">
        <p>Accueil</p>
        <p>Produits</p>
        <p>À propos</p>
        <p>Contact</p>
      </div>

      <div className="user-icons">
        <i className="bi bi-search"></i>
        <i className="bi bi-person"></i>
        <span className="cart-icon">
          <i className="bi bi-cart"></i>
          <span className="cart-badge">3</span>
        </span>
      </div>
    </nav>
  );
}

export default TopNav;
