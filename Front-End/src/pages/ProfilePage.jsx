import React, { useState, useRef } from 'react';
import { styles } from '../styles/styles';
import { initialUser, initialPrivate, stats, genderOptions, mockComments } from '../services/mockData';
import Avatar from '../components/common/Avatar';
import InputField from '../components/common/InputField';
import SelectField from '../components/common/SelectField';
import SectionCard from '../components/common/SectionCard';
import ActionButtons from '../components/common/ActionButtons';
import Toast from '../components/common/Toast';
import CommentsPage from '../components/comments/CommentsPage';
import TopNav from "../Components/navbarComponent/TopNav";

const ProfilePage = () => {
  const [currentPage, setCurrentPage] = useState("profile"); // "profile" ou "comments"
  const [user, setUser] = useState(initialUser);
  const [priv, setPriv] = useState(initialPrivate);
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});
  const fileRef = useRef(null);

  // Gestionnaires d'événements
  const showToast = (msg, type = "success") => {
    setToast({ message: msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  const updateUser = (field) => (e) => {
    setUser((u) => ({ ...u, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const updatePriv = (field) => (e) => {
    setPriv((p) => ({ ...p, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (file.size > 2 * 1024 * 1024) {
      showToast("L'image ne doit pas dépasser 2 Mo", "error");
      return;
    }
    
    const url = URL.createObjectURL(file);
    setUser((u) => ({ ...u, avatar: url }));
    showToast("Photo de profil mise à jour");
  };

  const validatePrivateInfo = () => {
    const newErrors = {};
    
    if (priv.password && priv.password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
    }
    
    if (priv.password !== priv.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSavePrivate = () => {
    if (validatePrivateInfo()) {
      console.log("Données privées à sauvegarder:", { 
        email: priv.email, 
        password: priv.password ? "[MASQUÉ]" : null 
      });
      showToast("Informations de sécurité enregistrées");
      setPriv((p) => ({ ...p, password: "", confirmPassword: "" }));
    }
  };

  const handleSavePublic = () => {
    console.log("Données publiques à sauvegarder:", user);
    showToast("Informations personnelles enregistrées");
  };

  const handleViewComments = () => {
    setCurrentPage("comments");
  };

  const handleBackToProfile = () => {
    setCurrentPage("profile");
  };

  // Affichage conditionnel
  if (currentPage === "comments") {
    return (
      <>
        <style>{styles.global}</style>
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <div style={styles.container}>
          <CommentsPage comments={mockComments} onBack={handleBackToProfile} />
        </div>
      </>
    );
  }

  // Page de profil
  return (
    <>
      <TopNav/>
      <style>{styles.global}</style>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div style={styles.container}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.logo}>Bazaro</div>

          {/* Avatar upload */}
          <div style={styles.avatarContainer}>
            <Avatar src={user.avatar} name={`${user.firstName} ${user.lastName}`} size={90} />
            <button onClick={() => fileRef.current.click()} style={styles.avatarButton}>
              📷
            </button>
            <input 
              ref={fileRef} 
              type="file" 
              accept="image/*" 
              style={{ display: "none" }} 
              onChange={handleAvatar} 
            />
          </div>

          <div style={styles.userInfo}>
            <div style={styles.userName}>{user.firstName} {user.lastName}</div>
            <div style={styles.userEmail}>{priv.email}</div>
            <div style={styles.userBadge}>✓ Client vérifié</div>
          </div>

          {/* Stats */}
          <div style={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} style={styles.statCard}>
                <div style={styles.statValue}>{s.value}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          {["Informations personnelles", "Sécurité & Confidentialité", "Historique des commandes"].map((item, i) => (
            <div key={item} style={{
              ...styles.navItem,
              ...(i === 0 ? styles.navItemActive : {})
            }}>
              {item}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main style={styles.main}>
          <div style={styles.pageHeader}>
            <h1 style={styles.pageTitle}>Profil</h1>
            <p style={styles.pageSubtitle}>
              Gérez vos informations personnelles et la sécurité de votre compte.
            </p>
          </div>

          {/* Sections côte à côte */}
          <div style={styles.sectionsGrid}>
            {/* Section publique */}
            <SectionCard title="Informations personnelles">
              <div style={styles.formGrid}>
                <InputField
                  label="Prénom"
                  value={user.firstName}
                  onChange={updateUser("firstName")}
                  placeholder="Votre prénom"
                />
                <InputField
                  label="Nom"
                  value={user.lastName}
                  onChange={updateUser("lastName")}
                  placeholder="Votre nom"
                />
                <InputField
                  label="Téléphone"
                  value={user.phone}
                  onChange={updateUser("phone")}
                  placeholder="+212 6 00 00 00 00"
                />
                <SelectField
                  label="Genre"
                  value={user.gender}
                  onChange={updateUser("gender")}
                  options={genderOptions}
                />
                <InputField
                  label="Date de naissance"
                  type="date"
                  value={user.dob}
                  onChange={updateUser("dob")}
                />
                <InputField
                  label="Adresse"
                  value={user.address}
                  onChange={updateUser("address")}
                  placeholder="Votre adresse complète"
                />
              </div>

              {/* Photo de profil */}
              <div style={styles.photoSection}>
                <Avatar src={user.avatar} name={`${user.firstName} ${user.lastName}`} size={56} />
                <div style={styles.photoInfo}>
                  <div style={styles.photoTitle}>Photo de profil</div>
                  <div style={styles.photoSubtitle}>Formats JPG, PNG. Max 2 Mo.</div>
                  <button onClick={() => fileRef.current.click()} style={styles.photoButton}>
                    Changer la photo
                  </button>
                </div>
              </div>

              <ActionButtons
                onCancel={() => setUser(initialUser)}
                onSave={handleSavePublic}
              />
            </SectionCard>

            {/* Section privée */}
            <SectionCard title="Sécurité et Confidentialité">
              <div style={styles.formGrid}>
                <InputField
                  label="Adresse e-mail"
                  type="email"
                  value={priv.email}
                  onChange={updatePriv("email")}
                  placeholder="votre@email.com"
                />
                <div /> {/* Spacer */}
                <InputField
                  label="Nouveau mot de passe"
                  type="password"
                  value={priv.password}
                  onChange={updatePriv("password")}
                  placeholder="••••••••"
                  error={errors.password}
                />
                <InputField
                  label="Confirmer le mot de passe"
                  type="password"
                  value={priv.confirmPassword}
                  onChange={updatePriv("confirmPassword")}
                  placeholder="••••••••"
                  error={errors.confirmPassword}
                />
              </div>

              <ActionButtons
                onCancel={() => {
                  setPriv(initialPrivate);
                  setErrors({});
                }}
                onSave={handleSavePrivate}
              />
            </SectionCard>
          </div>

          {/* Section Historique - BOUTON FONCTIONNEL */}
          <div style={styles.historySection}>
            <div>
              <div style={styles.historyTitle}>Historique des commentaires</div>
              <div style={styles.historySubtitle}>
                Retrouvez tous vos avis et commentaires laissés sur vos achats.
              </div>
            </div>
            <button onClick={handleViewComments} style={styles.historyButton}>
              Voir mes commentaires →
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProfilePage;