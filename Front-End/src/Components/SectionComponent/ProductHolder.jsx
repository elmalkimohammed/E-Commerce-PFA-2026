import ProductCard from "./ProductCard";
import "../../pages/Styles/productHolder.css";

function ProductHolder() {
    const products = [
        { name: "Smartphone Pro X", desc: "Dernier modèle avec caméra 108MP", logo: "bi bi-phone", price: 899, badge: { label: "Nouveau", variant: "new" } },
        { name: "Laptop Ultra", desc: "Performance exceptionnelle", logo: "bi bi-laptop", price: 1299 },
        { name: "Écouteurs Sans Fil", desc: "Réduction de bruit active", logo: "bi bi-headphones", price: 159, oldPrice: 199, badge: { label: "-20%", variant: "sale" } },
        { name: "Montre Connectée", desc: "Suivi santé et fitness", logo: "bi bi-smartwatch", price: 349 },
        { name: "Caméra 4K Pro", desc: "Qualité professionnelle", logo: "bi bi-camera", price: 1599, badge: { label: "Nouveau", variant: "new" } },
        { name: "Écran 4K 27\"", desc: "Couleurs précises", logo: "bi bi-display", price: 449 },
    ];
  return (
    <div className="product-holder">
      <h1>Produits populaires</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
export default ProductHolder;