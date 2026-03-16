import api from './api';

// Service dédié UNIQUEMENT aux produits populaires
export const popularProductService = {
  // GET /api/products/popular - Récupérer les produits populaires
  getPopularProducts: async () => {
    try {
      console.log('🔄 Récupération des produits populaires...');
      const response = await api.get('/api/products/popular');
      console.log('✅ Produits populaires reçus:', response.data);
      
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('❌ Erreur chargement produits populaires:', error);
      
      // Données de secours complètes (18 produits)
      const fallbackProducts = [
        { id: 1, name: "Smartphone Pro X", desc: "Dernier modèle avec caméra 108MP", logo: "bi bi-phone", price: 899, oldPrice: null, badge: { label: "Nouveau", variant: "new" } },
        { id: 2, name: "Laptop Ultra", desc: "Performance exceptionnelle", logo: "bi bi-laptop", price: 1299, oldPrice: null, badge: null },
        { id: 3, name: "Écouteurs Sans Fil", desc: "Réduction de bruit active", logo: "bi bi-headphones", price: 159, oldPrice: 199, badge: { label: "-20%", variant: "sale" } },
        { id: 4, name: "Montre Connectée", desc: "Suivi santé et fitness", logo: "bi bi-smartwatch", price: 349, oldPrice: null, badge: null },
        { id: 5, name: "Caméra 4K Pro", desc: "Qualité professionnelle", logo: "bi bi-camera", price: 1599, oldPrice: null, badge: { label: "Nouveau", variant: "new" } },
        { id: 6, name: "Écran 4K 27\"", desc: "Couleurs précises", logo: "bi bi-display", price: 449, oldPrice: null, badge: null },
        { id: 7, name: "Clavier Mécanique", desc: "Rétroéclairage RGB", logo: "bi bi-keyboard", price: 129, oldPrice: 159, badge: { label: "-20%", variant: "sale" } },
        { id: 8, name: "Souris Gaming", desc: "Haute précision", logo: "bi bi-mouse", price: 79, oldPrice: null, badge: null },
        { id: 9, name: "Enceinte Bluetooth", desc: "Son puissant et portable", logo: "bi bi-speaker", price: 99, oldPrice: null, badge: { label: "Nouveau", variant: "new" } },
        { id: 10, name: "Tablette Graphique", desc: "Idéale pour les créatifs", logo: "bi bi-tablet", price: 299, oldPrice: null, badge: null },
        { id: 11, name: "SSD Externe 1TB", desc: "Transferts ultra rapides", logo: "bi bi-hdd", price: 149, oldPrice: 199, badge: { label: "-25%", variant: "sale" } },
        { id: 12, name: "Casque de Réalité Virtuelle", desc: "Immersion totale", logo: "bi bi-vr", price: 499, oldPrice: null, badge: { label: "Nouveau", variant: "new" } },
        { id: 13, name: "Routeur Wi-Fi 6", desc: "Connexion ultra rapide", logo: "bi bi-router", price: 199, oldPrice: null, badge: null },
        { id: 14, name: "Projecteur Portable", desc: "Divertissement à emporter", logo: "bi bi-projector", price: 249, oldPrice: 299, badge: { label: "-17%", variant: "sale" } },
        { id: 15, name: "Batterie Externe 20,000mAh", desc: "Charge rapide pour tous vos appareils", logo: "bi bi-battery-charging", price: 59, oldPrice: null, badge: { label: "Nouveau", variant: "new" } },
        { id: 16, name: "Imprimante 3D", desc: "Créez vos propres objets", logo: "bi bi-printer", price: 899, oldPrice: null, badge: null },
        { id: 17, name: "Drone de Loisirs", desc: "Capturez des vues aériennes époustouflantes", logo: "bi bi-robot", price: 399, oldPrice: 499, badge: { label: "-20%", variant: "sale" } },
        { id: 18, name: "Casque Audio Haut de Gamme", desc: "Son immersif et confort optimal", logo: "bi bi-headset", price: 299, oldPrice: null, badge: { label: "Nouveau", variant: "new" } }
      ];
      
      return {
        success: false,
        data: fallbackProducts
      };
    }
  },

  // POST /api/products/{id}/add-to-cart - Ajouter au panier
  addToCart: async (productId, quantity = 1) => {
    try {
      const response = await api.post(`/api/products/${productId}/add-to-cart`, { quantity });
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Erreur ajout au panier:', error);
      return {
        success: false,
        error: error.response?.data?.message || "Erreur lors de l'ajout au panier"
      };
    }
  }
};