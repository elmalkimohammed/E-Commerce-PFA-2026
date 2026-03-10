import React, { useState } from 'react';
import './Styles/ProductDetail.css';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = {
    name: "Sony WH-1000XM5",
    category: "Casques Audio",
    rating: 4.7,
    reviews: 128,
    price: 3499,
    originalPrice: 4199,
    discount: 17,
    stock: 12,
    description: "Le casque Sony WH-1000XM5 offre une réduction de bruit de niveau professionnel avec 8 microphones intégrés et deux processeurs. Profitez d'une qualité audio exceptionnelle avec le codec LDAC, d'un confort supérieur grâce à son design ergonomique et d'une autonomie de 30 heures. Idéal pour les voyageurs et les professionnels exigeants.",
    connectivity: "Bluetooth 5.2",
    weight: "250g",
    battery: "30 heures",
    color: "Noir Minuit",
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  };

  const handleQuantityChange = (action) => {
    if (action === 'increment' && quantity < product.stock) {
      setQuantity(quantity + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="product-detail-container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb">
        <a href="/">Accueil</a>
        <span className="separator">›</span>
        <a href="/category/casques-audio">{product.category}</a>
        <span className="separator">›</span>
        <span className="current">{product.name}</span>
      </nav>

      <div className="product-content">
        {/* Left Column - Images */}
        <div className="product-gallery">
          <div className="main-image-container">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="main-image"
            />
          </div>
          <div className="thumbnail-container">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail-btn ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          
          {/* Rating Section */}
          <div className="rating-section">
            <div className="stars-container">
              {[...Array(5)].map((_, index) => (
                <span key={index} className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`}>
                  ★
                </span>
              ))}
            </div>
            <span className="rating-value">{product.rating}</span>
            <span className="review-count">({product.reviews} avis)</span>
          </div>

          {/* Price Section */}
          <div className="price-section">
            <span className="current-price">{formatPrice(product.price)} MAD</span>
            <span className="original-price">{formatPrice(product.originalPrice)} MAD</span>
            <span className="discount-badge">-{product.discount}%</span>
          </div>

          {/* Stock Status */}
          <div className="stock-status">
            <span className="in-stock-indicator">●</span>
            <span className="in-stock-text">En stock</span>
            <span className="stock-count">— {product.stock} unités disponibles</span>
          </div>

          {/* Description */}
          <p className="product-description">{product.description}</p>

          {/* Technical Specifications */}
          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label">CONNECTIVITÉ</span>
              <span className="spec-value">{product.connectivity}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">POIDS</span>
              <span className="spec-value">{product.weight}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">AUTONOMIE</span>
              <span className="spec-value">{product.battery}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">COULEUR</span>
              <span className="spec-value">{product.color}</span>
            </div>
          </div>

          {/* Add to Cart Section */}
          <div className="add-to-cart-section">
            <div className="quantity-selector">
              <button 
                className="quantity-btn minus"
                onClick={() => handleQuantityChange('decrement')}
                disabled={quantity <= 1}
              >
                −
              </button>
              <span className="quantity-display">{quantity}</span>
              <button 
                className="quantity-btn plus"
                onClick={() => handleQuantityChange('increment')}
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
            <button className="add-to-cart-btn">
              Ajouter au Panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;