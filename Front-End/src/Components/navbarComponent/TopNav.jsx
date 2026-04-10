import { useEffect, useState, useRef } from "react";   // ← useRef ajouté
import { useNavigate } from "react-router-dom";
import { prodAPI } from "../../services/servicesAPI";

import { useDispatch } from "react-redux";
import { setChosenCategory } from "../../store/categorySlicer.js";

import axios from "axios";

import "../../pages/Styles/TopNavStyle.css";

function TopNav() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [categories, setCategories] = useState([]);
  const [spanState, setSpanState]   = useState(false);

  // ── États search (manquaient dans ton fichier) ──
  const [products, setProducts]     = useState([]);
  const [searchLine, setSearchLine] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef                   = useRef(null);   // ← ref pour détecter clic extérieur

  const navigate   = useNavigate();
  const dispatcher = useDispatch();

  // Charger les produits une seule fois
  useEffect(() => {
    fetch(prodAPI)
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  // Fermer le dropdown si clic en dehors
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Filtrer par nom à chaque frappe
  const query    = searchLine.trim();
  const filtered = query
    ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  // Surligner les lettres qui matchent
  const highlight = (text) => {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase()
        ? <mark key={i} className="search-mark">{part}</mark>
        : part
    );
  };

  // Auth redirect
  const navChecker = () => {
    localStorage.getItem("generatedJWT_Token")
      ? navigate("/ProfilePage")
      : navigate("/Authentication");
  };

  // Catégories
  useEffect(() => { getCategories(); }, []);

  const getCategories = async () => {
    try {
      setCategories((await axios.get(`${prodAPI}/getCategories`)).data);
    } catch (error) {
      alert(error.response?.data || "An Internal Error Happened While Trying To Fetch The Categories.....");
    }
  };

  const displaySpan   = () => setSpanState((s) => !s);
  const storeCategory = (value) => dispatcher(setChosenCategory(value));

  return (
    <>
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
          <p><a href="/"             onClick={() => setMenuOpen(false)}>Accueil</a></p>
          <p><a onClick={() => { setMenuOpen(false); displaySpan(); }} className="categoryList">Catègories</a></p>
          <p><a href="#"             onClick={() => setMenuOpen(false)}>À propos</a></p>
          <p><a href="/CategoryPage" onClick={() => setMenuOpen(false)}>Filtrage</a></p>
          <p><a href="#"             onClick={() => setMenuOpen(false)}>Contact</a></p>
          {localStorage.getItem("generatedJWT_Token") && (
            <p><a href="/SellerPortal" onClick={() => setMenuOpen(false)}>Vendres</a></p>
          )}
        </div>

        <div className="user-icons">

          {/* ── Barre de recherche ── */}
          <div className="search-wrapper" ref={searchRef}>
            <div className="search-input-row">
              <i className="bi bi-search search-icon" aria-hidden />
              <input
                type="text"
                className="search-input"
                placeholder="Rechercher un produit..."
                value={searchLine}
                onChange={(e) => { setSearchLine(e.target.value); setSearchOpen(true); }}
                onFocus={() => setSearchOpen(true)}
              />
              {searchLine && (
                <button
                  className="search-clear"
                  onClick={() => { setSearchLine(""); setSearchOpen(false); }}
                  aria-label="Effacer"
                >
                  <i className="bi bi-x" />
                </button>
              )}
            </div>

            {/* Dropdown résultats */}
            {searchOpen && query && (
              <div className="search-dropdown">
                {filtered.length === 0 ? (
                  <p className="search-empty">Aucun produit trouvé pour «&nbsp;{query}&nbsp;»</p>
                ) : (
                  <>
                    <p className="search-count">{filtered.length} résultat{filtered.length > 1 ? "s" : ""}</p>
                    <ul className="search-list">
                      {filtered.map((p) => (
                        <li
                          key={p.id}
                          className="search-item"
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchLine("");
                            navigate(`/ProductPage/${p.id}`);
                          }}
                        >
                          <div className="search-item-info">
                            <span className="search-item-name">{highlight(p.name)}</span>
                            <span className="search-item-cat">{p.category}</span>
                          </div>
                          <span className="search-item-price">
                            {new Intl.NumberFormat("fr-FR").format(p.price)} FCFA
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>

          <i className="bi bi-person" aria-hidden onClick={navChecker}></i>
          <span className="cart-icon">
            <i className="bi bi-cart" aria-hidden onClick={() => navigate("/CartPage")}></i>
            <span className="cart-badge">3</span>
          </span>
        </div>
      </nav>

      {/* Bande catégories */}
      {spanState && (
        <span className="hiddenCategories" style={{ position: "sticky", top: "56.8px", zIndex: "51" }}>
          {categories.map((foundCategory) => (
            <span key={foundCategory} style={{ color: "white", cursor: "pointer", padding: "5px" }}>
              <a onClick={(e) => { storeCategory(e.target.innerText); navigate("/CategoryPage"); }}>
                {foundCategory}
              </a>
            </span>
          ))}
        </span>
      )}
    </>
  );
}

export default TopNav;