import "../../pages/Styles/product.css";
function ProductCard({ product }) {
  const { name, desc, logo, price, oldPrice, badge } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        {badge ? (
          <span className={`product-badge ${badge.variant}`}>{badge.label}</span>
        ) : null}
        <i className={logo}></i>
      </div>

      <div className="product-info">
        <div className="product-text">
          <h3>{name}</h3>
          <p className="product-desc">{desc}</p>
        </div>

        <div className="product-bottom">
          <div className="product-price">
            <span className="price">{price}€</span>
            {oldPrice ? <span className="old-price">{oldPrice}€</span> : null}
          </div>
          <button>Ajouter</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;