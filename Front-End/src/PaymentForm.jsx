import React, { useState } from 'react';
 
const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    phoneNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    country: ''
  });
 
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
 
  // Validation en temps réel
  const validateField = (name, value) => {
    let error = '';
 
    switch (name) {
      case 'cardName':
        if (!value.trim()) {
          error = 'Le nom sur la carte est requis';
        } else if (value.trim().length < 3) {
          error = 'Le nom doit contenir au moins 3 caractères';
        } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(value)) {
          error = 'Le nom ne doit contenir que des lettres';
        }
        break;
 
      case 'cardNumber':
        const cleaned = value.replace(/\s/g, '');
        if (!cleaned) {
          error = 'Le numéro de carte est requis';
        } else if (!/^\d+$/.test(cleaned)) {
          error = 'Le numéro de carte ne doit contenir que des chiffres';
        } else if (cleaned.length !== 16) {
          error = 'Le numéro de carte doit contenir 16 chiffres';
        } else if (!luhnCheck(cleaned)) {
          error = 'Numéro de carte invalide';
        }
        break;
 
      case 'phoneNumber':
        const phone = value.replace(/[\s-]/g, '');
        if (!phone) {
          error = 'Le numéro de téléphone est requis';
        } else if (!/^\d+$/.test(phone)) {
          error = 'Le numéro ne doit contenir que des chiffres';
        } else if (phone.length < 10 || phone.length > 15) {
          error = 'Le numéro doit contenir entre 10 et 15 chiffres';
        }
        break;
 
      case 'expiryDate':
        if (!value) {
          error = 'La date d\'expiration est requise';
        } else if (!/^\d{2}\/\d{2}$/.test(value)) {
          error = 'Format invalide (MM/AA)';
        } else {
          const [month, year] = value.split('/');
          const currentDate = new Date();
          const currentYear = currentDate.getFullYear() % 100;
          const currentMonth = currentDate.getMonth() + 1;
 
          if (parseInt(month) < 1 || parseInt(month) > 12) {
            error = 'Mois invalide (01-12)';
          } else if (parseInt(year) < currentYear || 
                    (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
            error = 'La carte est expirée';
          }
        }
        break;
 
      case 'cvv':
        if (!value) {
          error = 'Le code CVV est requis';
        } else if (!/^\d+$/.test(value)) {
          error = 'Le CVV ne doit contenir que des chiffres';
        } else if (value.length < 3 || value.length > 4) {
          error = 'Le CVV doit contenir 3 ou 4 chiffres';
        }
        break;
 
      case 'address':
        if (!value.trim()) {
          error = 'L\'adresse est requise';
        } else if (value.trim().length < 5) {
          error = 'L\'adresse doit contenir au moins 5 caractères';
        }
        break;
 
      case 'city':
        if (!value.trim()) {
          error = 'La ville est requise';
        } else if (value.trim().length < 2) {
          error = 'La ville doit contenir au moins 2 caractères';
        } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(value)) {
          error = 'La ville ne doit contenir que des lettres';
        }
        break;
 
      case 'country':
        if (!value) {
          error = 'Le pays est requis';
        }
        break;
 
      default:
        break;
    }
 
    return error;
  };
 
  // Algorithme de Luhn pour valider le numéro de carte
  const luhnCheck = (cardNumber) => {
    let sum = 0;
    let isEven = false;
 
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i]);
 
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
 
      sum += digit;
      isEven = !isEven;
    }
 
    return sum % 10 === 0;
  };
  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\s/g, '');
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(' ') : cleaned;
  };
  const formatExpiryDate = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === 'cardNumber') {
      const cleaned = value.replace(/\s/g, '');
      if (cleaned.length <= 16) {
        formattedValue = formatCardNumber(cleaned);
      } else {
        return; // Bloquer la saisie si plus de 16 chiffres
      }
    } else if (name === 'expiryDate') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length <= 4) {
        formattedValue = formatExpiryDate(cleaned);
      } else {
        return;
      }
    } else if (name === 'cvv') {
      if (value.length > 4 || !/^\d*$/.test(value)) {
        return; // Bloquer si plus de 4 chiffres ou non-numérique
      }
    } else if (name === 'phoneNumber') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length > 15) {
        return; // Max 15 chiffres
      }
      formattedValue = cleaned;
    } else if (name === 'cardName' || name === 'city') {
      if (value.length > 50) {
        return; // Max 50 caractères
      }
    } else if (name === 'address') {
      if (value.length > 100) {
        return; // Max 100 caractères
      }
    }
 
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
 
    // Valider le champ si déjà touché
    if (touched[name]) {
      const error = validateField(name, formattedValue);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };
 
  // Gestion du blur (perte de focus)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
 
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };
 
  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Valider tous les champs
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
 
    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
 
    // Si pas d'erreurs, soumettre
    if (Object.keys(newErrors).length === 0) {
      console.log('Formulaire valide, données:', formData);
      alert('Paiement effectué avec succès ! 🎉');
      // Ici tu enverrais les données à ton API
    } else {
      alert('Veuillez corriger les erreurs dans le formulaire');
    }
  };
 
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header */}
      <header className="bg-[#1a365d] text-white py-4 mb-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-bold text-[#48bb78]">TechStore</h1>
        </div>
      </header>
 
      <div className="max-w-2xl mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-2">Paiement sécurisé</h2>
          <p className="text-gray-600">Complétez les informations de votre carte bancaire</p>
        </div>
 
        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          
          {/* Informations de la carte */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
              💳 Informations de la carte
            </h3>
 
            {/* Nom sur la carte */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nom sur la carte *
              </label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="JEAN DUPONT"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.cardName && touched.cardName
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-200 focus:border-[#48bb78]'
                }`}
              />
              {errors.cardName && touched.cardName && (
                <p className="text-red-500 text-sm mt-1">⚠️ {errors.cardName}</p>
              )}
            </div>
 
            {/* Numéro de carte */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Numéro de carte *
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.cardNumber && touched.cardNumber
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-200 focus:border-[#48bb78]'
                }`}
              />
              {errors.cardNumber && touched.cardNumber && (
                <p className="text-red-500 text-sm mt-1">⚠️ {errors.cardNumber}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">16 chiffres</p>
            </div>
 
            {/* Date d'expiration et CVV */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date d'expiration *
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="MM/AA"
                  maxLength="5"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.expiryDate && touched.expiryDate
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-200 focus:border-[#48bb78]'
                  }`}
                />
                {errors.expiryDate && touched.expiryDate && (
                  <p className="text-red-500 text-sm mt-1">⚠️ {errors.expiryDate}</p>
                )}
              </div>
 
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Code CVV *
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="123"
                  maxLength="4"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.cvv && touched.cvv
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-200 focus:border-[#48bb78]'
                  }`}
                />
                {errors.cvv && touched.cvv && (
                  <p className="text-red-500 text-sm mt-1">⚠️ {errors.cvv}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">3-4 chiffres au dos</p>
              </div>
            </div>
          </div>
 
          {/* Informations de contact */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
              📞 Contact
            </h3>
 
            {/* Numéro de téléphone */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Numéro de téléphone *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="0612345678"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.phoneNumber && touched.phoneNumber
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-200 focus:border-[#48bb78]'
                }`}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">⚠️ {errors.phoneNumber}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">10-15 chiffres</p>
            </div>
          </div>
 
          {/* Adresse de facturation */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
              📍 Adresse de facturation
            </h3>
 
            {/* Adresse */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Adresse *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="123 Rue de la Paix"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.address && touched.address
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-200 focus:border-[#48bb78]'
                }`}
              />
              {errors.address && touched.address && (
                <p className="text-red-500 text-sm mt-1">⚠️ {errors.address}</p>
              )}
            </div>
 
            {/* Ville et Pays */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ville *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Paris"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.city && touched.city
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-200 focus:border-[#48bb78]'
                  }`}
                />
                {errors.city && touched.city && (
                  <p className="text-red-500 text-sm mt-1">⚠️ {errors.city}</p>
                )}
              </div>
 
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pays *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.country && touched.country
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-200 focus:border-[#48bb78]'
                  }`}
                >
                  <option value="">Sélectionner...</option>
                  <option value="France">France</option>
                  <option value="Belgique">Belgique</option>
                  <option value="Suisse">Suisse</option>
                  <option value="Canada">Canada</option>
                  <option value="Maroc">Maroc</option>
                  <option value="Tunisie">Tunisie</option>
                  <option value="Algérie">Algérie</option>
                </select>
                {errors.country && touched.country && (
                  <p className="text-red-500 text-sm mt-1">⚠️ {errors.country}</p>
                )}
              </div>
            </div>
          </div>
 
          {/* Bouton de soumission */}
          <button
            type="submit"
            className="w-full bg-[#48bb78] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#38a169] transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            🔒 Payer maintenant
          </button>
 
          <p className="text-center text-sm text-gray-500 mt-4">
            🔐 Paiement sécurisé - Vos informations sont protégées
          </p>
        </form>
      </div>
    </div>
  );
};
 
export default PaymentForm;