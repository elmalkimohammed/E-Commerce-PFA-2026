import React, { useState } from 'react';
import { styles } from '../../styles/styles';

const CommentsPage = ({ comments, onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRating, setFilterRating] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  // Filtrer et trier les commentaires
  const filteredComments = comments
    .filter(comment => {
      const matchesSearch = comment.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           comment.comment.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRating = filterRating === "all" || comment.rating === parseInt(filterRating);
      return matchesSearch && matchesRating;
    })
    .sort((a, b) => {
      if (sortBy === "recent") return new Date(b.date) - new Date(a.date);
      if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "likes") return b.likes - a.likes;
      return 0;
    });

  // Statistiques
  const averageRating = (comments.reduce((acc, c) => acc + c.rating, 0) / comments.length).toFixed(1);
  const totalLikes = comments.reduce((acc, c) => acc + c.likes, 0);
  const verifiedCount = comments.filter(c => c.verified).length;

  return (
    <div style={styles.commentsPage}>
      <div style={styles.commentsContainer}>
        {/* En-tête */}
        <div style={styles.commentsHeader}>
          <button onClick={onBack} style={styles.backButton}>
            ← Retour au profil
          </button>
          <h1 style={styles.commentsTitle}>Mes commentaires</h1>
        </div>

        {/* Statistiques */}
        <div style={styles.commentsStats}>
          <div style={styles.statBox}>
            <div style={styles.statBoxValue}>{comments.length}</div>
            <div style={styles.statBoxLabel}>Commentaires</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statBoxValue}>{averageRating}</div>
            <div style={styles.statBoxLabel}>Note moyenne</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statBoxValue}>{totalLikes}</div>
            <div style={styles.statBoxLabel}>J'aime reçus</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statBoxValue}>{verifiedCount}</div>
            <div style={styles.statBoxLabel}>Avis vérifiés</div>
          </div>
        </div>

        {/* Filtres et recherche */}
        <div style={styles.filtersSection}>
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            style={styles.filterSelect}
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
            style={styles.filterSelect}
          >
            <option value="recent">Plus récents</option>
            <option value="oldest">Plus anciens</option>
            <option value="rating">Meilleure note</option>
            <option value="likes">Plus de likes</option>
          </select>
        </div>

        {/* Liste des commentaires */}
        <div style={styles.commentsList}>
          {filteredComments.length === 0 ? (
            <div style={styles.noComments}>
              Aucun commentaire trouvé
            </div>
          ) : (
            filteredComments.map(comment => (
              <div key={comment.id} style={styles.commentCard}>
                <div style={styles.commentHeader}>
                  <img 
                    src={comment.productImage} 
                    alt={comment.productName}
                    style={styles.productImage}
                  />
                  <div style={styles.commentHeaderInfo}>
                    <h3 style={styles.productName}>{comment.productName}</h3>
                    <div style={styles.commentMeta}>
                      <span style={styles.commentDate}>
                        {new Date(comment.date).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      {comment.verified && (
                        <span style={styles.verifiedBadge}>✓ Achat vérifié</span>
                      )}
                    </div>
                  </div>
                  <div style={styles.rating}>
                    {"★".repeat(comment.rating)}
                    {"☆".repeat(5 - comment.rating)}
                  </div>
                </div>
                
                <p style={styles.commentText}>{comment.comment}</p>
                
                <div style={styles.commentFooter}>
                  <button style={styles.likeButton}>
                    👍 {comment.likes} j'aime
                  </button>
                  <button style={styles.replyButton}>
                    Répondre
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;