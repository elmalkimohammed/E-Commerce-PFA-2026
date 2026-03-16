import "../../pages/Styles/product.css";
import { useState } from "react";

function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false);
  
  // Extract data from your API response (GetDtoResponse structure)
  const {
    id,
    name,
    description,
    price,
    stock,
    category,
    attributes,
    image,
    mimetype,
    filename
  } = product;

  // Create image URL if image data exists
  const imageUrl = image && !imageError
    ? `data:${mimetype || 'image/jpeg'};base64,${arrayBufferToBase64(image)}`
    : null;

  // Helper function to convert byte array to base64
  function arrayBufferToBase64(buffer) {
    if (!buffer || buffer.length === 0) return '';
    
    // Handle if it's already a base64 string
    if (typeof buffer === 'string') return buffer;
    
    // Handle byte array
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  // Calculate discount if needed (you can adjust this logic)
  const hasDiscount = attributes && attributes['discount'];
  const oldPrice = hasDiscount ? price * 1.2 : null; // Example: 20% discount

  // Determine badge based on product data
  const getBadge = () => {
    if (attributes && attributes['isNew']) {
      return { label: "Nouveau", variant: "new" };
    }
    if (hasDiscount) {
      const discountPercent = attributes['discount'];
      return { label: `-${discountPercent}%`, variant: "sale" };
    }
    if (stock < 5 && stock > 0) {
      return { label: "Stock limité", variant: "limited" };
    }
    if (stock === 0) {
      return { label: "Rupture", variant: "out-of-stock" };
    }
    return null;
  };

  const badge = getBadge();

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Adding product ${id} to cart`);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        {badge && (
          <span className={`product-badge ${badge.variant}`}>{badge.label}</span>
        )}
        
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={filename || name}
            onError={() => setImageError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <i className="bi bi-image" style={{ fontSize: '3rem' }}></i>
        )}
      </div>

      <div className="product-info">
        <div className="product-text">
          <h3>{name}</h3>
          <p className="product-desc">{description}</p>
        
        </div>

        <div className="product-bottom">
          <div className="product-price">
            <span className="price">{price}€</span>
            {oldPrice && <span className="old-price">{Math.round(oldPrice)}€</span>}
          </div>
          <button 
            onClick={handleAddToCart}
            disabled={stock === 0}
            className={stock === 0 ? 'disabled' : ''}
          >
            {stock === 0 ? 'Rupture' : 'Ajouter'}
          </button>
        </div>
      </div>
      
    
    </div>
  );
}

export default ProductCard;