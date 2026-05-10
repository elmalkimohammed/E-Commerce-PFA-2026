import "../../pages/Styles/product.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const {
    id,
    name,
    description,
    price,
    stock,
    attributes,
    images = []
  } = product;

  const firstImage = images[0];
  const imageUrl = firstImage?.image && firstImage?.mimetype && !imageError
    ? `data:${firstImage.mimetype};base64,${firstImage.image}`
    : null;

  const hasDiscount = attributes && attributes['discount'];
  const oldPrice = hasDiscount ? price * 1.2 : null;

  const getBadge = () => {
    if (attributes && attributes['isNew']) return { label: "Nouveau", variant: "new" };
    if (hasDiscount) return { label: `-${attributes['discount']}%`, variant: "sale" };
    if (stock < 5 && stock > 0) return { label: "Stock limité", variant: "limited" };
    if (stock === 0) return { label: "Rupture", variant: "out-of-stock" };
    return null;
  };

  const badge = getBadge();

  return (
    <div className="product-card">
      <div className="product-image">
        {badge && (
          <span className={`product-badge ${badge.variant}`}>{badge.label}</span>
        )}

        {imageUrl ? (
          <img
            src={imageUrl}
            alt={firstImage.filename || name}
            onError={() => setImageError(true)}
          />
        ) : (
          <i className="bi bi-image" />
        )}
      </div>

      <div className="product-info">
        <div className="product-text">
          <h3>{name}</h3>
          <p className="product-desc">{description}</p>
        </div>

        <div className="product-bottom">
          <div className="product-price">
            <span className="price">{price} MAD</span>
            {oldPrice && <span className="old-price">{Math.round(oldPrice)} MAD</span>}
          </div>
          <button
            onClick={() => navigate(`/product/${id}`)}
            disabled={stock === 0}
            className={stock === 0 ? 'disabled' : ''}
          >
            {stock === 0 ? 'Rupture' : 'Détails'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
