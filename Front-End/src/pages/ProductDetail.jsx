import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { prodAPI, cartAPI } from "../services/servicesAPI"
import TopNav from "../Components/navbarComponent/TopNav"
import axios from "axios"
import "./Styles/ProductDetail.css"

const ProductDetail = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [product,    setProduct]    = useState(null)
  const [quantity,   setQuantity]   = useState(1)
  const [activeImg,  setActiveImg]  = useState(0)
  const [cartMsg,    setCartMsg]    = useState(null)
  const [loading,    setLoading]    = useState(false)
  const [imgError,   setImgError]   = useState(false)

  useEffect(() => {
    fetch(`${prodAPI}/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setActiveImg(0)
        setImgError(false)
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
    : []

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

  /* ── Ajouter au Panier ── */
  const handleAddToCart = async () => {
    
    // Vérifier si JWT existe
    const token = localStorage.getItem("generatedJWT_Token")
    console.log("TOKEN:", token)
    if (!token) {
      navigate("/Authentication")
      return
    }

    // Vérifier si le stock est disponible
    if (product.stock === 0) return

    setLoading(true)
    setCartMsg(null)

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }

      // POST /api/cart/addToCart
      // userId est extrait automatiquement du JWT côté Back-End
      await axios.post(`${cartAPI}/addToCart`, {
        productId: product.id,  // ← l'id du produit
        stock: quantity          // ← la quantité choisie
      }, config)

      setCartMsg({ type: "success", text: "✅ Produit ajouté au panier !" })

    } catch (err) {
      console.error(err)
      setCartMsg({ type: "error", text: "❌ Erreur lors de l'ajout au panier." })
    } finally {
      setLoading(false)
      // Effacer le message après 3 secondes
      setTimeout(() => setCartMsg(null), 3000)
    }
  }

  return (
    <>
    <TopNav/>
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
            {images.length > 0 && images[activeImg]?.image && images[activeImg]?.mimetype && !imgError ? (
              <img
                key={activeImg}
                src={`data:${images[activeImg].mimetype};base64,${images[activeImg].image}`}
                alt={product.name}
                className="main-image"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="main-image" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5" }}>
                <i className="bi bi-image" style={{ fontSize: "5rem", color: "#ccc" }} />
              </div>
            )}
          </div>

          {images.length > 1 && (
            <div className="thumbnail-container">
              {images.map((img, index) => (
                <button
                  key={img.id_Image ?? index}
                  className={`thumbnail-btn ${activeImg === index ? "active" : ""}`}
                  onClick={() => { setActiveImg(index); setImgError(false) }}
                >
                  {img.image && img.mimetype ? (
                    <img
                      src={`data:${img.mimetype};base64,${img.image}`}
                      alt={`${product.name} view ${index + 1}`}
                    />
                  ) : (
                    <i className="bi bi-image" style={{ fontSize: "1.5rem", color: "#ccc" }} />
                  )}
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

            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={loading || product.stock === 0}
            >
              {loading ? "Ajout en cours..." : "Ajouter au Panier"}
            </button>

          </div>

          {/* Message succès / erreur */}
          {cartMsg && (
            <p style={{
              marginTop: "1em",
              color: cartMsg.type === "success" ? "green" : "red",
              fontWeight: "bold"
            }}>
              {cartMsg.text}
            </p>
          )}

        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetail