import { useState } from "react";

const initialProducts = [
  { id: 1, name: "Smartphone Pro X", category: "Smartphones", price: 899, stock: 25, emoji: "📱", description: "Dernier modèle avec caméra 108MP", badge: "Nouveau", analytics: { views: 1234, sales: 45, revenue: 40455, conversionRate: 3.6 } },
  { id: 2, name: "Laptop Ultra", category: "Ordinateurs", price: 1299, stock: 15, emoji: "💻", description: "Performance exceptionnelle", badge: null, analytics: { views: 987, sales: 32, revenue: 41568, conversionRate: 3.2 } },
  { id: 3, name: "Écouteurs Sans Fil", category: "Audio", price: 159, stock: 50, emoji: "🎧", description: "Réduction de bruit active", badge: "-20%", oldPrice: 199, analytics: { views: 1567, sales: 67, revenue: 10653, conversionRate: 4.3 } },
  { id: 4, name: "Montre Connectée", category: "Montres", price: 349, stock: 30, emoji: "⌚", description: "Suivi santé et fitness", badge: null, analytics: { views: 765, sales: 28, revenue: 9772, conversionRate: 3.7 } },
  { id: 5, name: "Caméra 4K Pro", category: "Caméras", price: 1599, stock: 8, emoji: "📷", description: "Qualité professionnelle", badge: "Nouveau", analytics: { views: 543, sales: 12, revenue: 19188, conversionRate: 2.2 } },
  { id: 6, name: 'Écran 4K 27"', category: "Écrans", price: 449, stock: 20, emoji: "🖥️", description: "Couleurs précises", badge: null, analytics: { views: 891, sales: 23, revenue: 10327, conversionRate: 2.6 } },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --navy: #0f172a;
    --navy-mid: #1e293b;
    --green: #4ade80;
    --green-dark: #22c55e;
    --blue: #3b82f6;
    --red: #ef4444;
    --gray: #64748b;
    --gray-light: #f1f5f9;
    --white: #ffffff;
    --text: #0f172a;
    --border: #e2e8f0;
  }

  body { font-family: 'DM Sans', sans-serif; background: var(--gray-light); color: var(--text); }

  .ts-header {
    background: var(--navy);
    color: white;
    position: sticky;
    top: 0;
    z-index: 200;
    box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  }
  .ts-header-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .ts-logo {
    font-family: 'Syne', sans-serif;
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--green);
    letter-spacing: -0.5px;
    cursor: pointer;
  }
  .ts-nav { display: flex; gap: 0.25rem; }
  .ts-nav-btn {
    background: none;
    border: none;
    color: rgba(255,255,255,0.7);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .ts-nav-btn:hover, .ts-nav-btn.active { color: white; background: rgba(255,255,255,0.1); }
  .ts-nav-btn.active { color: var(--green); }
  .ts-header-right { display: flex; align-items: center; gap: 1rem; }
  .ts-icon-btn {
    background: rgba(255,255,255,0.08);
    border: none;
    border-radius: 8px;
    padding: 0.5rem 0.8rem;
    font-size: 1.1rem;
    cursor: pointer;
    position: relative;
    transition: background 0.2s;
  }
  .ts-icon-btn:hover { background: rgba(255,255,255,0.15); }
  .ts-badge {
    position: absolute;
    top: -4px; right: -4px;
    background: var(--red);
    color: white;
    font-size: 0.65rem;
    font-weight: 700;
    width: 18px; height: 18px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }

  .ts-hero {
    background: linear-gradient(135deg, var(--navy) 0%, #1a2744 100%);
    color: white;
    padding: 7rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .ts-hero::before {
    content: '';
    position: absolute;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%);
    top: -100px; right: -100px;
    border-radius: 50%;
  }
  .ts-hero::after {
    content: '';
    position: absolute;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%);
    bottom: -50px; left: -50px;
    border-radius: 50%;
  }
  .ts-hero-content { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
  .ts-hero-tag {
    display: inline-block;
    background: rgba(74,222,128,0.15);
    color: var(--green);
    border: 1px solid rgba(74,222,128,0.3);
    padding: 0.3rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5px;
  }
  .ts-hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.2rem;
    letter-spacing: -1px;
  }
  .ts-hero p { font-size: 1.15rem; color: rgba(255,255,255,0.65); margin-bottom: 2.5rem; }
  .ts-btn-primary {
    background: var(--green);
    color: var(--navy);
    border: none;
    padding: 0.9rem 2.2rem;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  .ts-btn-primary:hover { background: var(--green-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(74,222,128,0.35); }

  .ts-container { max-width: 1280px; margin: 0 auto; padding: 0 2rem; }
  .ts-section { padding: 5rem 0; }
  .ts-section-title {
    font-family: 'Syne', sans-serif;
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--navy);
    margin-bottom: 0.5rem;
    letter-spacing: -0.5px;
  }
  .ts-section-sub { color: var(--gray); margin-bottom: 3rem; }

  .ts-product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 1.5rem;
  }
  .ts-product-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    transition: all 0.3s;
    border: 1px solid var(--border);
  }
  .ts-product-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); }
  .ts-product-img {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    position: relative;
  }
  .ts-product-badge {
    position: absolute;
    top: 12px; right: 12px;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.3px;
  }
  .ts-badge-new { background: var(--green); color: var(--navy); }
  .ts-badge-sale { background: var(--red); color: white; }
  .ts-product-body { padding: 1.25rem; }
  .ts-product-body h3 {
    font-family: 'Syne', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--navy);
    margin-bottom: 0.3rem;
  }
  .ts-product-desc { color: var(--gray); font-size: 0.88rem; margin-bottom: 1rem; }
  .ts-product-footer { display: flex; align-items: center; justify-content: space-between; }
  .ts-price { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 700; color: var(--navy); }
  .ts-old-price { font-size: 0.9rem; color: #94a3b8; text-decoration: line-through; margin-left: 0.4rem; font-weight: 400; }
  .ts-btn-add {
    background: var(--navy);
    color: white;
    border: none;
    padding: 0.55rem 1.1rem;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  .ts-btn-add:hover { background: var(--blue); }

  .ts-features { background: white; padding: 4rem 0; }
  .ts-feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
  }
  .ts-feature-item {
    text-align: center;
    padding: 2rem 1.5rem;
    border-radius: 12px;
    background: var(--gray-light);
    border: 1px solid var(--border);
    transition: all 0.2s;
  }
  .ts-feature-item:hover { border-color: var(--green); background: rgba(74,222,128,0.04); }
  .ts-feature-icon { font-size: 2.5rem; margin-bottom: 1rem; }
  .ts-feature-item h3 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; color: var(--navy); margin-bottom: 0.3rem; }
  .ts-feature-item p { color: var(--gray); font-size: 0.88rem; }

  .ts-footer { background: var(--navy); color: white; padding: 4rem 0 1.5rem; }
  .ts-footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; margin-bottom: 3rem; }
  .ts-footer-col h4 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; color: var(--green); margin-bottom: 1rem; }
  .ts-footer-col p { color: rgba(255,255,255,0.55); font-size: 0.9rem; line-height: 1.7; }
  .ts-footer-col ul { list-style: none; }
  .ts-footer-col ul li { margin-bottom: 0.5rem; }
  .ts-footer-col a { color: rgba(255,255,255,0.55); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
  .ts-footer-col a:hover { color: var(--green); }
  .ts-footer-input-row { display: flex; gap: 0.5rem; }
  .ts-footer-input {
    flex: 1;
    padding: 0.65rem 1rem;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.07);
    border-radius: 8px;
    color: white;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
  }
  .ts-footer-input::placeholder { color: rgba(255,255,255,0.4); }
  .ts-footer-input:focus { outline: none; border-color: var(--green); }
  .ts-footer-btn {
    background: var(--green);
    color: var(--navy);
    border: none;
    padding: 0.65rem 1.2rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
  }
  .ts-footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 1.5rem;
    text-align: center;
    color: rgba(255,255,255,0.35);
    font-size: 0.85rem;
  }

  .ts-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    padding: 3rem 0;
  }
  .ts-stat-card {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    border: 1px solid rgba(255,255,255,0.07);
    padding: 2rem;
    border-radius: 16px;
    color: white;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
  }
  .ts-stat-card::before {
    content: '';
    position: absolute;
    width: 100px; height: 100px;
    background: radial-gradient(circle, rgba(74,222,128,0.2), transparent);
    top: -20px; right: -20px;
    border-radius: 50%;
  }
  .ts-stat-card:hover { transform: translateY(-4px); }
  .ts-stat-icon { font-size: 2rem; margin-bottom: 1rem; }
  .ts-stat-value { font-family: 'Syne', sans-serif; font-size: 2.2rem; font-weight: 800; margin-bottom: 0.25rem; }
  .ts-stat-label { color: rgba(255,255,255,0.5); font-size: 0.88rem; }

  .ts-table-wrap {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--border);
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    margin-bottom: 2rem;
  }
  .ts-table { width: 100%; border-collapse: collapse; }
  .ts-table thead { background: var(--gray-light); }
  .ts-table th {
    padding: 1rem 1.25rem;
    text-align: left;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    border-bottom: 2px solid var(--border);
  }
  .ts-table td { padding: 1rem 1.25rem; border-bottom: 1px solid var(--border); vertical-align: middle; }
  .ts-table tbody tr:last-child td { border-bottom: none; }
  .ts-table tbody tr:hover { background: #fafbff; }
  .ts-prod-row { display: flex; align-items: center; gap: 1rem; }
  .ts-prod-emoji { font-size: 2rem; }
  .ts-prod-name { font-weight: 600; font-size: 0.95rem; color: var(--navy); }
  .ts-prod-desc { font-size: 0.82rem; color: var(--gray); }
  .ts-cat-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: rgba(59,130,246,0.1);
    color: var(--blue);
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .ts-stock-low { color: var(--red); font-weight: 700; }
  .ts-stock-ok { color: var(--green-dark); font-weight: 700; }
  .ts-analytics-cell { font-size: 0.82rem; line-height: 2; color: #475569; }
  .ts-btn-edit, .ts-btn-delete {
    padding: 0.4rem 0.9rem;
    border: none;
    border-radius: 6px;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    margin-right: 0.4rem;
  }
  .ts-btn-edit { background: rgba(59,130,246,0.1); color: var(--blue); }
  .ts-btn-edit:hover { background: var(--blue); color: white; }
  .ts-btn-delete { background: rgba(239,68,68,0.1); color: var(--red); }
  .ts-btn-delete:hover { background: var(--red); color: white; }

  .ts-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(4px);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .ts-modal {
    background: white;
    border-radius: 20px;
    padding: 2.5rem;
    width: 100%;
    max-width: 560px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  }
  .ts-modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
  .ts-modal-title { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--navy); }
  .ts-modal-close { background: var(--gray-light); border: none; border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 1.1rem; cursor: pointer; transition: background 0.2s; }
  .ts-modal-close:hover { background: var(--border); }
  .ts-form-group { margin-bottom: 1.25rem; }
  .ts-form-group label { display: block; font-weight: 600; font-size: 0.88rem; color: var(--navy); margin-bottom: 0.5rem; }
  .ts-form-group input, .ts-form-group select, .ts-form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid var(--border);
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    color: var(--text);
    transition: border-color 0.2s;
    background: white;
  }
  .ts-form-group input:focus, .ts-form-group select:focus, .ts-form-group textarea:focus {
    outline: none;
    border-color: var(--green);
  }
  .ts-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .ts-modal-actions { display: flex; gap: 0.75rem; margin-top: 1.5rem; }
  .ts-btn-cancel {
    flex: 1;
    padding: 0.85rem;
    background: var(--gray-light);
    color: var(--gray);
    border: none;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }
  .ts-btn-cancel:hover { background: var(--border); }
  .ts-btn-submit {
    flex: 2;
    padding: 0.85rem;
    background: var(--green);
    color: var(--navy);
    border: none;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
  }
  .ts-btn-submit:hover { background: var(--green-dark); }
  .ts-section-head { margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; }

  @media (max-width: 768px) {
    .ts-nav { display: none; }
    .ts-form-row { grid-template-columns: 1fr; }
    .ts-table { font-size: 0.82rem; }
    .ts-table th, .ts-table td { padding: 0.75rem; }
  }
`;

function Header({ page, setPage, cartCount }) {
  return (
    <header className="ts-header">
      <div className="ts-header-inner">
        <div className="ts-logo" onClick={() => setPage("store")}>TechStore</div>
        <nav className="ts-nav">
          {page === "store" ? (
            <>
              <button className="ts-nav-btn active">Accueil</button>
              <button className="ts-nav-btn" onClick={() => document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" })}>Produits</button>
              <button className="ts-nav-btn">À propos</button>
              <button className="ts-nav-btn" onClick={() => setPage("vendor")}>Espace Vendeur</button>
            </>
          ) : (
            <>
              <button className="ts-nav-btn" onClick={() => setPage("store")}>Accueil</button>
              <button className="ts-nav-btn active">Mes Produits</button>
              <button className="ts-nav-btn">Analytics</button>
              <button className="ts-nav-btn">Profil</button>
            </>
          )}
        </nav>
        <div className="ts-header-right">
          {page === "store" ? (
            <>
              <button className="ts-icon-btn">🔍</button>
              <button className="ts-icon-btn">👤</button>
              <button className="ts-icon-btn">
                🛒
                {cartCount > 0 && <span className="ts-badge">{cartCount}</span>}
              </button>
            </>
          ) : (
            <>
              <button className="ts-icon-btn">🔔</button>
              <button className="ts-icon-btn">👤</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function Footer({ page }) {
  return (
    <footer className="ts-footer">
      <div className="ts-container">
        <div className="ts-footer-grid">
          <div className="ts-footer-col">
            <h4>TechStore</h4>
            <p>Votre boutique de technologie de confiance depuis 2020.</p>
          </div>
          {page === "store" ? (
            <>
              <div className="ts-footer-col">
                <h4>Liens rapides</h4>
                <ul>
                  <li><a href="#">Produits</a></li>
                  <li><a href="#">À propos</a></li>
                  <li><a href="#">Espace Vendeur</a></li>
                </ul>
              </div>
              <div className="ts-footer-col">
                <h4>Aide</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Livraison</a></li>
                  <li><a href="#">Retours</a></li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="ts-footer-col">
                <h4>Espace Vendeur</h4>
                <ul>
                  <li><a href="#">Mes Produits</a></li>
                  <li><a href="#">Analytics</a></li>
                  <li><a href="#">Commandes</a></li>
                </ul>
              </div>
              <div className="ts-footer-col">
                <h4>Aide</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Guide</a></li>
                </ul>
              </div>
            </>
          )}
          <div className="ts-footer-col">
            <h4>Newsletter</h4>
            <p style={{ marginBottom: "1rem" }}>Recevez nos meilleures offres.</p>
            <div className="ts-footer-input-row">
              <input className="ts-footer-input" type="email" placeholder="Votre email" />
              <button className="ts-footer-btn">→</button>
            </div>
          </div>
        </div>
        <div className="ts-footer-bottom">© 2024 TechStore. Tous droits réservés.</div>
      </div>
    </footer>
  );
}

function StorePage({ products, onAddToCart }) {
  return (
    <>
      <section className="ts-hero">
        <div className="ts-hero-content">
          <div className="ts-hero-tag">✨ Collection Printemps 2024</div>
          <h1>La tech de demain, disponible aujourd'hui</h1>
          <p>Découvrez nos derniers produits technologiques soigneusement sélectionnés.</p>
          <button className="ts-btn-primary">Découvrir maintenant →</button>
        </div>
      </section>

      <section className="ts-section" id="products-section">
        <div className="ts-container">
          <h2 className="ts-section-title">Produits populaires</h2>
          <p className="ts-section-sub">Les incontournables de la saison</p>
          <div className="ts-product-grid">
            {products.map(p => (
              <div className="ts-product-card" key={p.id}>
                <div className="ts-product-img">
                  {p.badge && (
                    <span className={`ts-product-badge ${p.badge === "Nouveau" ? "ts-badge-new" : "ts-badge-sale"}`}>
                      {p.badge}
                    </span>
                  )}
                  {p.emoji}
                </div>
                <div className="ts-product-body">
                  <h3>{p.name}</h3>
                  <p className="ts-product-desc">{p.description}</p>
                  <div className="ts-product-footer">
                    <span className="ts-price">
                      {p.price}€
                      {p.oldPrice && <span className="ts-old-price">{p.oldPrice}€</span>}
                    </span>
                    <button className="ts-btn-add" onClick={() => onAddToCart(p)}>+ Ajouter</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ts-features">
        <div className="ts-container">
          <div className="ts-feature-grid">
            {[
              { icon: "🚚", title: "Livraison gratuite", desc: "À partir de 50€ d'achat" },
              { icon: "🔒", title: "Paiement sécurisé", desc: "100% transactions protégées" },
              { icon: "↩️", title: "Retour gratuit", desc: "Sous 30 jours" },
              { icon: "💬", title: "Support 24/7", desc: "À votre service" },
            ].map(f => (
              <div className="ts-feature-item" key={f.title}>
                <div className="ts-feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProductModal({ mode, product, onClose, onSubmit }) {
  const [form, setForm] = useState(
    product
      ? { name: product.name, category: product.category, price: product.price, stock: product.stock, emoji: product.emoji, description: product.description }
      : { name: "", category: "", price: "", stock: "", emoji: "", description: "" }
  );

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...form, price: parseFloat(form.price), stock: parseInt(form.stock) });
  };

  return (
    <div className="ts-modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="ts-modal">
        <div className="ts-modal-header">
          <h2 className="ts-modal-title">{mode === "add" ? "Nouveau produit" : "Modifier le produit"}</h2>
          <button className="ts-modal-close" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="ts-form-group">
            <label>Nom du produit *</label>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Ex: Smartphone Pro X" />
          </div>
          <div className="ts-form-row">
            <div className="ts-form-group">
              <label>Catégorie *</label>
              <select name="category" value={form.category} onChange={handleChange} required>
                <option value="">Sélectionner...</option>
                {["Smartphones","Ordinateurs","Audio","Montres","Caméras","Écrans"].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="ts-form-group">
              <label>Prix (€) *</label>
              <input name="price" type="number" value={form.price} onChange={handleChange} required min="0" step="0.01" placeholder="0.00" />
            </div>
          </div>
          <div className="ts-form-row">
            <div className="ts-form-group">
              <label>Stock (unités) *</label>
              <input name="stock" type="number" value={form.stock} onChange={handleChange} required min="0" placeholder="0" />
            </div>
            <div className="ts-form-group">
              <label>Emoji *</label>
              <input name="emoji" value={form.emoji} onChange={handleChange} required maxLength="2" placeholder="📱" />
            </div>
          </div>
          <div className="ts-form-group">
            <label>Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows="3" placeholder="Décrivez votre produit..." />
          </div>
          <div className="ts-modal-actions">
            <button type="button" className="ts-btn-cancel" onClick={onClose}>Annuler</button>
            <button type="submit" className="ts-btn-submit">{mode === "add" ? "Ajouter le produit" : "Enregistrer"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function VendorPage({ products, setProducts }) {
  const [modal, setModal] = useState(null);

  const totalViews = products.reduce((s, p) => s + p.analytics.views, 0);
  const totalSales = products.reduce((s, p) => s + p.analytics.sales, 0);
  const totalRevenue = products.reduce((s, p) => s + p.analytics.revenue, 0);

  const handleSubmit = (data) => {
    if (modal.mode === "add") {
      const newProduct = {
        id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
        badge: null,
        ...data,
        analytics: { views: 0, sales: 0, revenue: 0, conversionRate: 0 },
      };
      setProducts(p => [...p, newProduct]);
    } else {
      setProducts(p => p.map(pr => pr.id === modal.product.id ? { ...pr, ...data } : pr));
    }
    setModal(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Supprimer ce produit ?")) setProducts(p => p.filter(pr => pr.id !== id));
  };

  return (
    <>
      <section className="ts-hero">
        <div className="ts-hero-content">
          <div className="ts-hero-tag">🏪 Espace Vendeur</div>
          <h1>Gérez vos produits</h1>
          <p>Suivez vos performances et gérez votre catalogue en temps réel.</p>
          <button className="ts-btn-primary" onClick={() => setModal({ mode: "add" })}>+ Vendre un produit</button>
        </div>
      </section>

      <div style={{ background: "white", borderBottom: "1px solid var(--border)" }}>
        <div className="ts-container">
          <div className="ts-stats-grid">
            {[
              { icon: "📦", value: products.length, label: "Produits Total" },
              { icon: "👁️", value: totalViews.toLocaleString(), label: "Vues Totales" },
              { icon: "🛒", value: totalSales, label: "Ventes Totales" },
              { icon: "💰", value: totalRevenue.toLocaleString() + "€", label: "Revenu Total" },
            ].map(s => (
              <div className="ts-stat-card" key={s.label}>
                <div className="ts-stat-icon">{s.icon}</div>
                <div className="ts-stat-value">{s.value}</div>
                <div className="ts-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="ts-section">
        <div className="ts-container">
          <div className="ts-section-head">
            <div>
              <h2 className="ts-section-title">Mes Produits</h2>
              <p className="ts-section-sub" style={{ marginBottom: 0 }}>{products.length} produits dans votre catalogue</p>
            </div>
            <button className="ts-btn-primary" onClick={() => setModal({ mode: "add" })}>+ Ajouter</button>
          </div>
          <div className="ts-table-wrap">
            <table className="ts-table">
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>Catégorie</th>
                  <th>Prix</th>
                  <th>Stock</th>
                  <th>Analytics</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(p => (
                  <tr key={p.id}>
                    <td>
                      <div className="ts-prod-row">
                        <span className="ts-prod-emoji">{p.emoji}</span>
                        <div>
                          <div className="ts-prod-name">{p.name}</div>
                          <div className="ts-prod-desc">{p.description}</div>
                        </div>
                      </div>
                    </td>
                    <td><span className="ts-cat-badge">{p.category}</span></td>
                    <td style={{ fontWeight: 700 }}>{p.price.toFixed(2)}€</td>
                    <td className={p.stock < 20 ? "ts-stock-low" : "ts-stock-ok"}>{p.stock} unités</td>
                    <td className="ts-analytics-cell">
                      👁️ {p.analytics.views.toLocaleString()} vues<br />
                      🛒 {p.analytics.sales} ventes<br />
                      💰 {p.analytics.revenue.toLocaleString()}€<br />
                      📈 {p.analytics.conversionRate}%
                    </td>
                    <td>
                      <button className="ts-btn-edit" onClick={() => setModal({ mode: "edit", product: p })}>✏️ Modifier</button>
                      <button className="ts-btn-delete" onClick={() => handleDelete(p.id)}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {modal && (
        <ProductModal
          mode={modal.mode}
          product={modal.product}
          onClose={() => setModal(null)}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default function App() {
  const [page, setPage] = useState("store");
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart(c => [...c, product]);

  return (
    <>
      <style>{styles}</style>
      <Header page={page} setPage={setPage} cartCount={cart.length} />
      {page === "store" ? (
        <StorePage products={products} onAddToCart={addToCart} />
      ) : (
        <VendorPage products={products} setProducts={setProducts} />
      )}
      <Footer page={page} />
    </>
  );
}