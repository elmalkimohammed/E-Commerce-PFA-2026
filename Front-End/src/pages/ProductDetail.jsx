import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { prodAPI } from "../services/servicesAPI"
import "./Styles/ProductDetail.css"

const ProductDetail = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    fetch(`${prodAPI}/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setActiveImg(0)
      })
      .catch(err => console.error(err))
  }, [id])

  if (!product) return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <p>Chargement...</p>
    </div>
  )

  const images = product.images?.length > 0
    ? product.images
    : [{ image: product.image, mimetype: product.mimetype, id_Image: 0 }]

  const handleQuantityChange = (action) => {
    if (action === "increment" && quantity < product.stock) setQuantity(q => q + 1)
    if (action === "decrement" && quantity > 1) setQuantity(q => q - 1)
  }

  const formatPrice = price => price.toLocaleString("fr-MA")

  const stockStatus = product.stock > 10
    ? { label: "En stock" }
    : product.stock > 0
    ? { label: "Stock limité" }
    : { label: "Rupture de stock" }

  const attributeEntries = product.attributes ? Object.entries(product.attributes) : []

  const RATING = 4.0
  const REVIEW_COUNT = 24

  return (
    <div className="product-detail-container">

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <a onClick={() => navigate("/")}>Accueil</a>
        <span className="separator">›</span>
        <a onClick={() => navigate("/categoryPage")}>{product.category}</a>
        <span className="separator">›</span>
        <span className="current">{product.name}</span>
      </nav>

      <div className="product-content">

        {/* LEFT — Gallery */}
        <div className="product-gallery">

          <div className="main-image-container">
            <img
              key={activeImg}
              src={`data:${images[activeImg].mimetype};base64,${images[activeImg].image}`}
              alt={product.name}
              className="main-image"
            />
          </div>

          {images.length > 1 && (
            <div className="thumbnail-container">
              {images.map((img, index) => (
                <button
                  key={img.id_Image ?? index}
                  className={`thumbnail-btn ${activeImg === index ? "active" : ""}`}
                  onClick={() => setActiveImg(index)}
                >
                  <img
                    src={`data:${img.mimetype};base64,${img.image}`}
                    alt={`${product.name} view ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          )}

        </div>

        {/* RIGHT — Info */}
        <div className="product-info">

          <h1 className="product-title">{product.name}</h1>

          {/* Rating */}
          <div className="rating-section">
            <div className="stars-container">
              {[1, 2, 3, 4, 5].map(star => (
                <span key={star} className={`star ${star <= Math.round(RATING) ? "filled" : ""}`}>★</span>
              ))}
            </div>
            <span className="rating-value">{RATING}</span>
            <span className="review-count">({REVIEW_COUNT} avis)</span>
          </div>

          {/* Price */}
          <div className="price-section">
            <span className="current-price">{formatPrice(product.price)} MAD</span>
          </div>

          {/* Stock */}
          <div className="stock-status">
            <span className="in-stock-indicator">●</span>
            <span className="in-stock-text">{stockStatus.label}</span>
            {product.stock > 0 && (
              <span className="stock-count">— {product.stock} unités disponibles</span>
            )}
          </div>

          {/* Description */}
          <p className="product-description">{product.description}</p>

          {/* Attributes */}
          {attributeEntries.length > 0 && (
            <div className="specs-grid">
              {attributeEntries.map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-label">{key}</span>
                  <span className="spec-value">{String(value)}</span>
                </div>
              ))}
            </div>
          )}

          {/* Quantity + Cart */}
          <div className="add-to-cart-section">

            <div className="quantity-selector">
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange("decrement")}
                disabled={quantity <= 1}
              >−</button>
              <span className="quantity-display">{quantity}</span>
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange("increment")}
                disabled={quantity >= product.stock}
              >+</button>
            </div>

            <button className="add-to-cart-btn">
              Ajouter au Panier
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail