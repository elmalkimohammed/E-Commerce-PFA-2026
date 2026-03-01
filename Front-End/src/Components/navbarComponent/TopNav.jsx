import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../pages/Styles/TopNavStyle.css";

function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

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
        <p><a href="#" onClick={() => setMenuOpen(false)}>Catègories</a></p>
        <p><a href="#" onClick={() => setMenuOpen(false)}>À propos</a></p>
        <p><a href="#" onClick={() => setMenuOpen(false)}>Contact</a></p>
      </div>

      <div className="user-icons">
        <i className="bi bi-search" aria-hidden></i>
        <i className="bi bi-person" aria-hidden onClick={ () => { navigate("/Authentication") } }></i>
        <span className="cart-icon">
          <i className="bi bi-cart" aria-hidden></i>
          <span className="cart-badge">3</span>
        </span>
      </div>
    </nav>
  );
}

export default TopNav;
