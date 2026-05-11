import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { prodAPI, cartAPI, reviewAPI, userAPI } from "../services/servicesAPI"
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
  const [rating,     setRating]     = useState(0)
  const [reviewCount, setReviewCount] = useState(0)
  const [reviews,    setReviews]    = useState([])

  const [users, setUsers] = useState({})
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newRating, setNewRating]   = useState(5)
  const [newComment, setNewComment] = useState("")
  const [submittingReview, setSubmittingReview] = useState(false)
  const [reviewMsg, setReviewMsg]   = useState(null)

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

  // Charger les reviews + les infos des utilisateurs
  const loadReviews = async () => {
    try {
      // Récupérer le rating moyen
      const ratingRes = await fetch(`${reviewAPI}/product/${id}/rating`)
      const ratingData = await ratingRes.json()
      setRating(ratingData || 0)

      // Récupérer les avis
      const reviewsRes = await fetch(`${reviewAPI}/product/${id}`)
      const reviewsData = await reviewsRes.json()
      const sorted = (reviewsData || []).sort((a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
      )
      setReviews(sorted)
      setReviewCount(sorted.length)

      // Récupérer les infos des utilisateurs uniques
      const uniqueUserIds = [...new Set(sorted.map(r => r.userId))]
      const usersData = {}

      await Promise.all(
        uniqueUserIds.map(async (userId) => {
          try {
            const res = await fetch(`${userAPI}/${userId}`)
            if (res.ok) {
              const userData = await res.json()
              usersData[userId] = userData
            }
          } catch (e) {
            console.error(`Erreur chargement user ${userId}:`, e)
          }
        })
      )

      setUsers(usersData)

    } catch (err) {
      console.error("Erreur chargement reviews:", err)
    }
  }

  useEffect(() => {
    if (!id) return
    loadReviews()
  }, [id])


  if (!product) return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <p>Chargement...</p>
    </div>
  )

  const images = product.images?.length > 0 ? product.images : []

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

  /* ── Décoder le JWT pour récupérer le userId ── */
  const getUserIdFromToken = (token) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      return payload.userId || payload.sub || payload.id
    } catch (e) {
      return null
    }
  }

  /* ── Ajouter au Panier ── */
  const handleAddToCart = async () => {
    const token = localStorage.getItem("generatedJWT_Token")
    if (!token) {
      navigate("/Authentication")
      return
    }

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

      await axios.post(`${cartAPI}/addToCart`, {
        productId: product.id,
        stock: quantity
      }, config)

      setCartMsg({ type: "success", text: "✅ Produit ajouté au panier !" })

    } catch (err) {
      console.error(err)
      setCartMsg({ type: "error", text: "❌ Erreur lors de l'ajout au panier." })
    } finally {
      setLoading(false)
      setTimeout(() => setCartMsg(null), 3000)
    }
  }

  /* ── Soumettre un nouveau commentaire ── */
  const handleSubmitReview = async () => {
    const token = localStorage.getItem("generatedJWT_Token")
    if (!token) {
      navigate("/Authentication")
      return
    }

    if (!newComment.trim()) {
      setReviewMsg({ type: "error", text: "Veuillez écrire un commentaire." })
      return
    }

    const userId = getUserIdFromToken(token)
    if (!userId) {
      setReviewMsg({ type: "error", text: "Erreur d'authentification." })
      return
    }

    setSubmittingReview(true)
    setReviewMsg(null)

    try {
      await axios.post(`${reviewAPI}/`, {
        productId: Number(product.id),
        userId: userId,
        rating: newRating,
        comment: newComment
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })

      setReviewMsg({ type: "success", text: "✅ Commentaire ajouté avec succès !" })
      setNewComment("")
      setNewRating(5)
      setShowReviewForm(false)

      loadReviews()

    } catch (err) {
      console.error(err)
      setReviewMsg({ type: "error", text: "❌ Erreur lors de l'envoi." })
    } finally {
      setSubmittingReview(false)
      setTimeout(() => setReviewMsg(null), 3000)
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
            {images.length > 0 && !imgError && (images[activeImg]?.imageUrl || (images[activeImg]?.image && images[activeImg]?.mimetype)) ? (
              <img
                key={activeImg}
                src={images[activeImg]?.imageUrl || `data:${images[activeImg].mimetype};base64,${images[activeImg].image}`}
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
                  {(img.imageUrl || (img.image && img.mimetype)) ? (
                    <img
                      src={img.imageUrl || `data:${img.mimetype};base64,${img.image}`}
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
                <span key={star} className={`star ${star <= Math.round(rating) ? "filled" : ""}`}>★</span>
              ))}
            </div>
            <span className="rating-value">{rating.toFixed(1)}</span>
            <span className="review-count">({reviewCount} avis)</span>
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

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION COMMENTAIRES                                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="comments-section">
        <div className="comments-header">
          <h2 className="comments-title">
            Commentaires <span className="comments-count">({reviewCount})</span>
          </h2>
          <button
            className="add-review-btn"
            onClick={() => setShowReviewForm(prev => !prev)}
          >
            {showReviewForm ? "✕ Annuler" : "✍️ Ajouter un commentaire"}
          </button>
        </div>

        {/* Formulaire d'ajout */}
        {showReviewForm && (
          <div className="review-form">
            <h3 className="form-title">Votre avis</h3>

            <div className="form-rating">
              <label>Note :</label>
              <div className="rating-stars-input">
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    key={star}
                    className={`star-input ${star <= newRating ? "filled" : ""}`}
                    onClick={() => setNewRating(star)}
                  >★</span>
                ))}
                <span className="rating-text">{newRating}/5</span>
              </div>
            </div>

            <textarea
              className="comment-input"
              placeholder="Partagez votre expérience avec ce produit..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              maxLength={500}
            />
            <div className="char-count">{newComment.length}/500</div>

            <div className="form-actions">
              <button
                className="submit-review-btn"
                onClick={handleSubmitReview}
                disabled={submittingReview || !newComment.trim()}
              >
                {submittingReview ? "Envoi..." : "Publier mon avis"}
              </button>
            </div>

            {reviewMsg && (
              <p className={`review-msg ${reviewMsg.type}`}>
                {reviewMsg.text}
              </p>
            )}
          </div>
        )}

        {/* Liste des commentaires */}
        {reviews.length === 0 ? (
          <p className="no-comments">
            Aucun commentaire pour ce produit. Soyez le premier à donner votre avis !
          </p>
        ) : (
          <div className="comments-list">
            {reviews.map(review => {
              const user = users[review.userId]
              const fullName = user
                ? `${user.firstName || "Utilisateur"} ${user.lastName || ""}`.trim()
                : "Utilisateur inconnu"
              const initials = user
                ? `${(user.firstName?.[0] || "U")}${(user.lastName?.[0] || "")}`.toUpperCase()
                : "U"

              return (
                <div key={review.reviewId} className="comment-card">
                  <div className="comment-header">
                    {user?.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt={fullName}
                        className="comment-avatar-img"
                      />
                    ) : (
                      <div
                        className="comment-avatar"
                        style={{
                          background: `hsl(${parseInt(review.userId.substring(0, 8), 16) % 360}, 65%, 55%)`
                        }}
                      >
                        {initials}
                      </div>
                    )}
                    <div className="comment-meta">
                      <span className="comment-author">{fullName}</span>
                      <div className="comment-stars">
                        {[1, 2, 3, 4, 5].map(star => (
                          <span
                            key={star}
                            className={`star ${star <= review.rating ? "filled" : ""}`}
                          >★</span>
                        ))}
                      </div>
                      <span className="comment-date">
                        {new Date(review.createdAt).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        })}
                      </span>
                    </div>
                  </div>
                  {review.comment && (
                    <p className="comment-text">{review.comment}</p>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>

    </div>
    </>
  )
}

export default ProductDetail
