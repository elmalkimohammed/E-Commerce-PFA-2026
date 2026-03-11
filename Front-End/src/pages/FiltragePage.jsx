import React, { useState } from 'react';

// Base de données de produits
const allProducts = [
  { id: 1, name: "Smartphone Pro X", category: "Smartphones", price: 899, emoji: "📱", description: "Dernier modèle avec caméra 108MP et écran OLED" },
  { id: 2, name: "Laptop Ultra", category: "Ordinateurs", price: 1299, emoji: "💻", description: "Performance exceptionnelle avec processeur i9" },
  { id: 3, name: "Écouteurs Sans Fil", category: "Audio", price: 159, emoji: "🎧", description: "Réduction de bruit active et son Hi-Fi" },
  { id: 4, name: "Montre Connectée", category: "Montres", price: 349, emoji: "⌚", description: "Suivi santé et fitness avec GPS intégré" },
  { id: 5, name: "Caméra 4K Pro", category: "Caméras", price: 1599, emoji: "📷", description: "Qualité professionnelle pour vos créations" },
  { id: 6, name: "Écran 4K 27\"", category: "Écrans", price: 449, emoji: "🖥️", description: "Couleurs précises pour les créatifs" },
  { id: 7, name: "iPhone 15 Pro", category: "Smartphones", price: 1199, emoji: "📱", description: "Le dernier iPhone avec puce A17 Pro" },
  { id: 8, name: "MacBook Air M3", category: "Ordinateurs", price: 1499, emoji: "💻", description: "Ultra léger et performant avec puce M3" },
  { id: 9, name: "AirPods Pro 2", category: "Audio", price: 279, emoji: "🎧", description: "Son spatial et réduction de bruit adaptative" },
  { id: 10, name: "Galaxy Watch 6", category: "Montres", price: 399, emoji: "⌚", description: "Montre intelligente avec suivi sommeil avancé" },
  { id: 11, name: "Sony Alpha A7 IV", category: "Caméras", price: 2499, emoji: "📷", description: "Appareil photo hybride professionnel 33MP" },
  { id: 12, name: "Samsung Odyssey G7", category: "Écrans", price: 699, emoji: "🖥️", description: "Écran gaming incurvé 240Hz" },
  { id: 13, name: "OnePlus 12", category: "Smartphones", price: 799, emoji: "📱", description: "Charge ultra rapide et écran 120Hz" },
  { id: 14, name: "Dell XPS 15", category: "Ordinateurs", price: 1799, emoji: "💻", description: "Station de travail portable premium" },
  { id: 15, name: "Bose QC45", category: "Audio", price: 329, emoji: "🎧", description: "Casque à réduction de bruit confort optimal" },
  { id: 16, name: "Garmin Fenix 7", category: "Montres", price: 699, emoji: "⌚", description: "Montre GPS multisport ultra résistante" },
  { id: 17, name: "Canon EOS R6 II", category: "Caméras", price: 2899, emoji: "📷", description: "Capteur plein format 24MP stabilisé" },
  { id: 18, name: "LG UltraWide 34\"", category: "Écrans", price: 599, emoji: "🖥️", description: "Écran ultra-large pour multitâche" },
  { id: 19, name: "Xiaomi 13 Pro", category: "Smartphones", price: 999, emoji: "📱", description: "Caméra Leica et charge 120W" },
  { id: 20, name: "ASUS ROG Zephyrus", category: "Ordinateurs", price: 2299, emoji: "💻", description: "PC gaming portable RTX 4080" },
  { id: 21, name: "Sony WH-1000XM5", category: "Audio", price: 399, emoji: "🎧", description: "Meilleure réduction de bruit du marché" },
  { id: 22, name: "Apple Watch Ultra 2", category: "Montres", price: 899, emoji: "⌚", description: "Montre sport extrême avec titanium" },
  { id: 23, name: "Fujifilm X-T5", category: "Caméras", price: 1699, emoji: "📷", description: "Appareil rétro 40MP avec simulation film" },
  { id: 24, name: "BenQ PD3220U", category: "Écrans", price: 1199, emoji: "🖥️", description: "Écran 4K calibré pour designers" },
  { id: 25, name: "Google Pixel 8 Pro", category: "Smartphones", price: 1099, emoji: "📱", description: "IA avancée et photographie computationnelle" }
];

const FiltragePage = () => {
  const [category, setCategory] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  
  const productsPerPage = 10;

  // Appliquer les filtres
  const applyFilters = () => {
    const min = parseFloat(priceMin) || 0;
    const max = parseFloat(priceMax) || Infinity;

    const filtered = allProducts.filter(product => {
      const matchCategory = !category || product.category === category;
      const matchPrice = product.price >= min && product.price <= max;
      return matchCategory && matchPrice;
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
    setHasSearched(true);
  };

  // Réinitialiser les filtres
  const resetFilters = () => {
    setCategory('');
    setPriceMin('');
    setPriceMax('');
    setFilteredProducts([]);
    setCurrentPage(1);
    setHasSearched(false);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Voir les détails d'un produit
  const viewDetails = (product) => {
    alert(`Détails du produit:\n\n${product.name}\nPrix: ${product.price}€\n\n${product.description}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1a365d] text-white py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#48bb78]">TechStore</div>
          <nav className="flex gap-8">
            <a href="#accueil" className="hover:text-[#48bb78] transition-colors">Accueil</a>
            <a href="#recherche" className="hover:text-[#48bb78] transition-colors">Recherche</a>
            <a href="#vendeur" className="hover:text-[#48bb78] transition-colors">Espace Vendeur</a>
          </nav>
          <div className="flex gap-6 text-xl">
            <span className="cursor-pointer hover:scale-110 transition-transform">🔍</span>
            <span className="cursor-pointer hover:scale-110 transition-transform">👤</span>
            <span className="cursor-pointer hover:scale-110 transition-transform relative">
              🛒 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2d3748] to-[#1a365d] text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Recherche & Filtrage</h1>
          <p className="text-xl text-gray-300">Trouvez le produit parfait parmi notre catalogue</p>
        </div>
      </section>

      {/* Barre de filtrage */}
      <section className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-6 items-end">
            {/* Catégorie */}
            <div className="flex-1 min-w-[200px]">
              <label className="block mb-2 font-semibold text-[#1a365d]">Catégorie</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#48bb78] focus:outline-none transition-colors"
              >
                <option value="">Toutes les catégories</option>
                <option value="Smartphones">Smartphones</option>
                <option value="Ordinateurs">Ordinateurs</option>
                <option value="Audio">Audio</option>
                <option value="Montres">Montres</option>
                <option value="Caméras">Caméras</option>
                <option value="Écrans">Écrans</option>
              </select>
            </div>

            {/* Prix Min */}
            <div className="flex-1 min-w-[200px]">
              <label className="block mb-2 font-semibold text-[#1a365d]">Prix minimum (€)</label>
              <input
                type="number"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                placeholder="0"
                min="0"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#48bb78] focus:outline-none transition-colors"
              />
            </div>

            {/* Prix Max */}
            <div className="flex-1 min-w-[200px]">
              <label className="block mb-2 font-semibold text-[#1a365d]">Prix maximum (€)</label>
              <input
                type="number"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                placeholder="∞"
                min="0"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#48bb78] focus:outline-none transition-colors"
              />
            </div>

            {/* Boutons */}
            <button
              onClick={applyFilters}
              className="px-8 py-3 bg-[#48bb78] text-white rounded-lg font-semibold hover:bg-[#38a169] transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              🔍 Filtrer
            </button>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              ↻ Réinitialiser
            </button>
          </div>
        </div>
      </section>

      {/* Section des résultats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {!hasSearched ? (
            // Message initial
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="text-7xl mb-6">🔎</div>
              <h3 className="text-3xl font-bold text-[#1a365d] mb-4">Commencez votre recherche</h3>
              <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                Utilisez les filtres ci-dessus pour trouver les produits qui vous intéressent.
              </p>
              <ul className="text-left max-w-xl mx-auto space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <span>Sélectionnez une <strong>catégorie</strong> pour affiner votre recherche</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💰</span>
                  <span>Définissez une <strong>fourchette de prix</strong> selon votre budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <span>Cliquez sur <strong>"Filtrer"</strong> pour voir les résultats</span>
                </li>
              </ul>
            </div>
          ) : filteredProducts.length === 0 ? (
            // Aucun résultat
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="text-7xl mb-6">😕</div>
              <h3 className="text-3xl font-bold text-[#1a365d] mb-4">Aucun produit trouvé</h3>
              <p className="text-xl text-gray-600">
                Essayez de modifier vos critères de recherche pour obtenir plus de résultats.
              </p>
            </div>
          ) : (
            // Résultats
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-[#1a365d]">Résultats de recherche</h2>
                <div className="text-gray-600">
                  {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
                </div>
              </div>

              {/* Liste des produits */}
              <div className="space-y-6">
                {currentProducts.map(product => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 p-6 flex gap-6"
                  >
                    {/* Image */}
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-40 h-40 rounded-lg flex items-center justify-center text-7xl flex-shrink-0">
                      {product.emoji}
                    </div>

                    {/* Contenu */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-2">
                          {product.category}
                        </span>
                        <h3 className="text-2xl font-bold text-[#1a365d] mb-2">{product.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <span className="text-3xl font-bold text-[#1a365d]">{product.price.toFixed(2)}€</span>
                        <button
                          onClick={() => viewDetails(product)}
                          className="px-6 py-3 bg-[#2b6cb0] text-white rounded-lg font-semibold hover:bg-[#2c5282] transition-all hover:shadow-lg"
                        >
                          Voir les détails →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
                  <button
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border-2 border-gray-200 rounded-lg font-semibold hover:border-[#48bb78] hover:text-[#48bb78] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    ← Précédent
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => changePage(pageNumber)}
                          className={`px-4 py-2 border-2 rounded-lg font-semibold transition-all ${
                            currentPage === pageNumber
                              ? 'bg-[#48bb78] text-white border-[#48bb78]'
                              : 'border-gray-200 hover:border-[#48bb78] hover:text-[#48bb78]'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    } else if (pageNumber === currentPage - 3 || pageNumber === currentPage + 3) {
                      return <span key={pageNumber} className="px-2">...</span>;
                    }
                    return null;
                  })}

                  <button
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border-2 border-gray-200 rounded-lg font-semibold hover:border-[#48bb78] hover:text-[#48bb78] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Suivant →
                  </button>

                  <span className="px-4 text-gray-600">
                    {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} sur {filteredProducts.length}
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a365d] text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold text-[#48bb78] mb-4">TechStore</h4>
              <p className="text-gray-300">Votre boutique de technologie de confiance depuis 2020</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#48bb78] mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[#48bb78] transition-colors">Accueil</a></li>
                <li><a href="#" className="hover:text-[#48bb78] transition-colors">Recherche</a></li>
                <li><a href="#" className="hover:text-[#48bb78] transition-colors">Espace Vendeur</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#48bb78] mb-4">Aide</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[#48bb78] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#48bb78] transition-colors">Livraison</a></li>
                <li><a href="#" className="hover:text-[#48bb78] transition-colors">Retours</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#48bb78] mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Inscrivez-vous pour recevoir nos offres</p>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-lg mb-2 text-gray-800"
              />
              <button className="w-full px-4 py-2 bg-[#48bb78] rounded-lg font-semibold hover:bg-[#38a169] transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700 text-gray-400">
            <p>&copy; 2024 TechStore. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FiltragePage;