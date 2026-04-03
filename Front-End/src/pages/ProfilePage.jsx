import React, { useState, useRef } from 'react';
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { styles } from '../styles/styles';
import {  stats, mockComments } from '../services/mockData';
import Avatar from '../components/common/Avatar';
import InputField from '../components/common/InputField';
import SelectField from '../components/common/SelectField';
import SectionCard from '../components/common/SectionCard';
import ActionButtons from '../components/common/ActionButtons';
import Toast from '../components/common/Toast';
import CommentsPage from '../components/comments/CommentsPage';
import TopNav from "../Components/navbarComponent/TopNav";
import { userAPI } from '../services/servicesAPI';

const ProfilePage = () => {
  const [currentPage, setCurrentPage] = useState("profile"); // "profile" ou "comments"
  const [user, setUser] = useState({
});
  const [priv, setPriv] = useState({
  });
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});
  
  const fileRef = useRef(null);
  const jwtToken = localStorage.getItem("generatedJWT_Token");
  const decodedToken = jwtDecode(jwtToken);
  const userId = decodedToken.sub;
  useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await fetch(`${userAPI}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtToken}`
        },
        body: JSON.stringify({ userId })
      });
      const data = await res.json();
      setUser({
            firstName: data.firstName,
            lastName: data.lastName ,
            phone: data.phone ?? "",
            address: data.address ?? "",
            gender: data.gender ?? "",                                          // ← add
            dob: data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "",   // ← add
            avatar: data.profileImage ?? null
          });
          
      setPriv({
        email: data.email ?? "",
        password: data.password ??""
      });
    } catch (err) {
      console.error("Failed to fetch user:", err);
    }
  };
  fetchUser();
}, []);
  function decryptPassword(object) {
    
  }
  const sexeOptions = [
    { value: "female", label: "female" },
    { value: "male", label: "male" },
  ];

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
      showToast("Informations de sécurité enregistrées");
      setPriv((p) => ({ ...p, password: "", confirmPassword: "" }));
    }
  };

  const handleSavePublic = () => {
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
            
          </div>
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
                  value = {user.firstName}
                  
                  placeholder="Votre prénom"
                />
                <InputField
                  label="Nom"
                  value = {user.lastName}
                  
                  placeholder="Votre nom"
                />
                <InputField
                  label="Téléphone"
                  value={user.phone}
                  
                  placeholder="+212 6 00 00 00 00"
                />
                <SelectField
                  label="Genre"
                  value={user.gender}
                  
                  options={sexeOptions}
                />
                <InputField
                  label="Date de naissance"
                  type="date"
                  value={user.dob}
                  
                />
                <InputField
                  label="Adresse"
                  value={user.address}
                  
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
                  
                  onChange={updatePriv("password")}
                  placeholder="••••••••"
                  error={errors.password}
                />
                <InputField
                  label="Confirmer le mot de passe"
                  type="password"
                  
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