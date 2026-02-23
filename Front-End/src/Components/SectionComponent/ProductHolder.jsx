import { useState } from "react";
import ProductCard from "./ProductCard";
import "../../pages/Styles/productHolder.css";

const ITEMS_PER_PAGE = 6;

function ProductHolder() {
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    { name: "Smartphone Pro X", desc: "Dernier modèle avec caméra 108MP", logo: "bi bi-phone", price: 899, badge: { label: "Nouveau", variant: "new" } },
    { name: "Laptop Ultra", desc: "Performance exceptionnelle", logo: "bi bi-laptop", price: 1299 },
    { name: "Écouteurs Sans Fil", desc: "Réduction de bruit active", logo: "bi bi-headphones", price: 159, oldPrice: 199, badge: { label: "-20%", variant: "sale" } },
    { name: "Montre Connectée", desc: "Suivi santé et fitness", logo: "bi bi-smartwatch", price: 349 },
    { name: "Caméra 4K Pro", desc: "Qualité professionnelle", logo: "bi bi-camera", price: 1599, badge: { label: "Nouveau", variant: "new" } },
    { name: "Écran 4K 27\"", desc: "Couleurs précises", logo: "bi bi-display", price: 449 },
    { name: "Clavier Mécanique", desc: "Rétroéclairage RGB", logo: "bi bi-keyboard", price: 129, oldPrice: 159, badge: { label: "-20%", variant: "sale" } },
    { name: "Souris Gaming", desc: "Haute précision", logo: "bi bi-mouse", price: 79 },
    { name: "Enceinte Bluetooth", desc: "Son puissant et portable", logo: "bi bi-speaker", price: 99, badge: { label: "Nouveau", variant: "new" } },
    { name: "Tablette Graphique", desc: "Idéale pour les créatifs", logo: "bi bi-tablet", price: 299 },
    {name: "SSD Externe 1TB", desc: "Transferts ultra rapides", logo: "bi bi-hdd", price: 149, oldPrice: 199, badge: { label: "-25%", variant: "sale" }},
    {name: "Casque de Réalité Virtuelle", desc: "Immersion totale", logo: "bi bi-vr", price: 499, badge: { label: "Nouveau", variant: "new" }},
    {name: "Routeur Wi-Fi 6", desc: "Connexion ultra rapide", logo: "bi bi-router", price: 199 },
    {name: "Projecteur Portable", desc: "Divertissement à emporter", logo: "bi bi-projector", price: 249, oldPrice: 299, badge: { label: "-17%", variant: "sale" }},
    {name: "Batterie Externe 20,000mAh", desc: "Charge rapide pour tous vos appareils", logo: "bi bi-battery-charging", price: 59, badge: { label: "Nouveau", variant: "new" }},
    {name: "Imprimante 3D", desc: "Créez vos propres objets", logo: "bi bi-printer", price: 899 },
    {name: "Drone de Loisirs", desc: "Capturez des vues aériennes époustouflantes", logo: "bi bi-robot", price: 399, oldPrice: 499, badge: { label: "-20%", variant: "sale" }},
    {name: "Casque Audio Haut de Gamme", desc: "Son immersif et confort optimal", logo: "bi bi-headset", price: 299, badge: { label: "Nouveau", variant: "new" }},
    
    

  ];

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="product-holder">
      <h1>Produits populaires</h1>
      <div className="product-grid">
        {paginatedProducts.map((product, index) => (
          <ProductCard key={startIndex + index} product={product} />
        ))}
      </div>
      {totalPages > 1 && (
        <nav className="product-pagination" aria-label="Pagination des produits">
          <button
            type="button"
            className="pagination-btn"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <div className="pagination-pages">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                className={`pagination-page ${currentPage === page ? "active" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="pagination-btn"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </nav>
      )}
    </div>
  );
}
export default ProductHolder;