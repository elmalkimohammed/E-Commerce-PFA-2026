import React, { useState } from 'react';
import './Styles/Commentstyle.css';

const CommentsPage = ({ comments = [], loading = false, onBack, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRating, setFilterRating] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  const filteredComments = comments
    .filter(comment => {
      const matchesSearch =
        (comment.productName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (comment.comment || "").toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRating =
        filterRating === "all" || comment.rating === parseInt(filterRating);
      return matchesSearch && matchesRating;
    })
    .sort((a, b) => {
      if (sortBy === "recent") return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

  const averageRating = comments.length
    ? (comments.reduce((acc, c) => acc + (c.rating || 0), 0) / comments.length).toFixed(1)
    : "0.0";

  return (
    <div className="comments-page-container">
      {/* Header */}
      <div className="comments-page-header">
        <button onClick={onBack} className="comments-back-btn">
          ← Retour au profil
        </button>
        <h1 className="comments-page-title">Mes commentaires</h1>
        <p className="comments-page-subtitle">
          {comments.length} commentaire{comments.length > 1 ? "s" : ""} au total
        </p>
      </div>

      {/* Stats */}
      {!loading && comments.length > 0 && (
        <div className="comments-stats">
          <div className="stat-box">
            <div className="stat-box-value">{comments.length}</div>
            <div className="stat-box-label">Commentaires</div>
          </div>
          <div className="stat-box">
            <div className="stat-box-value">{averageRating}</div>
            <div className="stat-box-label">Note moyenne</div>
          </div>
        </div>
      )}

      {/* Filters */}
      {!loading && comments.length > 0 && (
        <div className="comments-filters">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="comments-search-input"
          />
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="comments-filter-select"
          >
            <option value="all">Toutes les notes</option>
            <option value="5">5 étoiles</option>
            <option value="4">4 étoiles</option>
            <option value="3">3 étoiles</option>
            <option value="2">2 étoiles</option>
            <option value="1">1 étoile</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="comments-filter-select"
          >
            <option value="recent">Plus récents</option>
            <option value="oldest">Plus anciens</option>
            <option value="rating">Meilleure note</option>
          </select>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="comments-loading">
          <div className="comments-spinner"></div>
          <p>Chargement de vos commentaires...</p>
        </div>
      )}

      {/* Empty state */}
      {!loading && comments.length === 0 && (
        <div className="comments-empty">
          <div className="comments-empty-icon">💬</div>
          <h3 className="comments-empty-title">Aucun commentaire</h3>
          <p className="comments-empty-text">
            Vous n'avez encore laissé aucun commentaire sur vos achats.
          </p>
        </div>
      )}

      {/* No results after filter */}
      {!loading && comments.length > 0 && filteredComments.length === 0 && (
        <div className="comments-empty">
          <div className="comments-empty-icon">🔍</div>
          <h3 className="comments-empty-title">Aucun résultat</h3>
          <p className="comments-empty-text">Aucun commentaire ne correspond à votre recherche.</p>
        </div>
      )}

      {/* Comments list */}
      {!loading && filteredComments.length > 0 && (
        <div className="comments-list">
          {filteredComments.map((comment, index) => (
            <div
              key={comment.reviewId || `comment-${index}`}
              className="comment-item-card"
            >
              {/* Product info */}
              <div className="product-section">
                {comment.productImage?.image && comment.productImage?.mimetype ? (
                  <img
                    src={`data:${comment.productImage.mimetype};base64,${comment.productImage.image}`}
                    alt={comment.productName || "Produit"}
                    className="product-img"
                  />
                ) : (
                  <div className="product-img-placeholder">📦</div>
                )}
                <div className="product-info">
                  <div className="product-label">Produit</div>
                  <div className="product-name">
                    {comment.productName || "Produit inconnu"}
                  </div>
                </div>
              </div>

              {/* Rating + date */}
              <div className="meta-row">
                <div className="meta-stars">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span
                      key={star}
                      className={`meta-star ${star <= (comment.rating || 0) ? "filled" : ""}`}
                    >★</span>
                  ))}
                  <span className="rating-text">{comment.rating || 0}/5</span>
                </div>
                <span className="comment-date">{formatDate(comment.createdAt)}</span>
              </div>

              {/* Comment text */}
              {comment.comment && (
                <p className="comment-text">{comment.comment}</p>
              )}

              {/* Delete action only */}
              <div className="comment-actions">
                <button
                  className="delete-btn"
                  onClick={() => onDelete(comment.reviewId)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsPage;