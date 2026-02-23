import { useState } from "react";
import "../../pages/Styles/TopNavStyle.css";

function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="top-nav">
      <p className="brand">TechStore</p>

      <button
        type="button"
        className="nav-toggle"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
      >
        <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
      </button>

      <div className={`redirect ${menuOpen ? "open" : ""}`}>
        <p><a href="/" onClick={() => setMenuOpen(false)}>Accueil</a></p>
        <p><a href="/produits" onClick={() => setMenuOpen(false)}>Produits</a></p>
        <p><a href="/a-propos" onClick={() => setMenuOpen(false)}>À propos</a></p>
        <p><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></p>
      </div>

      <div className="user-icons">
        <i className="bi bi-search" aria-hidden></i>
        <i className="bi bi-person" aria-hidden></i>
        <span className="cart-icon">
          <i className="bi bi-cart" aria-hidden></i>
          <span className="cart-badge">3</span>
        </span>
      </div>
    </nav>
  );
}

export default TopNav;
