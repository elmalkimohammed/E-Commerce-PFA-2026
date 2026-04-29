import { useState, useRef, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { styles } from '../styles/styles';
import Avatar from '../components/common/Avatar';
import InputField from '../components/common/InputField';
import SelectField from '../components/common/SelectField';
import SectionCard from '../components/common/SectionCard';
import Toast from '../components/common/Toast';
import CommentsPage from './CommentPage';
import TopNav from "../Components/navbarComponent/TopNav";
import { userAPI, reviewAPI, prodAPI } from '../services/servicesAPI';
import axios from 'axios';

const ProfilePage = () => {
  const [currentPage, setCurrentPage] = useState("profile");
  const [user, setUser] = useState({});
  const [priv, setPriv] = useState({});
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [userComments, setUserComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);

  const fileRef = useRef(null);
  const jwtToken = localStorage.getItem("generatedJWT_Token");
  const decodedToken = jwtToken ? jwtDecode(jwtToken) : null;
  const userId = decodedToken?.sub;

  // Charger les infos utilisateur
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${userAPI}`, {
          headers: {
            "Authorization": `Bearer ${jwtToken}`
          },
        });
        const data = res.data;
        setUser({
          firstName: data.firstName ?? "",
          lastName: data.lastName ?? "",
          phone: data.phone ?? "",
          address: data.address ?? "",
          sex: data.sex ?? "",
          dob: data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "",
          avatar: data.profileImage ?? null
        });
        setPriv({
          email: data.email ?? "",
          password: "",
          confirmPassword: ""
        });
      } catch (err) {
        console.error("Failed to fetch user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Charger les commentaires de l'utilisateur
  useEffect(() => {
    if (!userId) return;

    const fetchUserComments = async () => {
      setCommentsLoading(true);
      try {
        // 1. Récupérer tous les commentaires de l'utilisateur
        const res = await axios.get(`${reviewAPI}/user/${userId}`, {
          headers: { Authorization: `Bearer ${jwtToken}` }
        });
        const comments = res.data || [];

        // 2. Récupérer les infos produits uniques
        const uniqueProductIds = [...new Set(comments.map(c => c.productId))];
        const productsData = {};

        await Promise.all(
          uniqueProductIds.map(async (pid) => {
            try {
              const prodRes = await fetch(`${prodAPI}/${pid}`);
              if (prodRes.ok) {
                const prodData = await prodRes.json();
                productsData[pid] = prodData;
              }
            } catch (e) {
              console.error(`Erreur produit ${pid}:`, e);
            }
          })
        );

        // 3. Enrichir les commentaires avec les infos produits
        const enrichedComments = comments
          .map(c => ({
            ...c,
            productName: productsData[c.productId]?.name || `Produit #${c.productId}`,
            productImage: productsData[c.productId]?.images?.[0] || null
          }))
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setUserComments(enrichedComments);
      } catch (err) {
        console.error("Erreur chargement commentaires:", err);
      } finally {
        setCommentsLoading(false);
      }
    };

    fetchUserComments();
  }, [userId, jwtToken]);

  const logout = () => {
    localStorage.removeItem("generatedJWT_Token");
    window.location.href = "/";
  };

  // Supprimer un commentaire
  const handleDeleteComment = async (reviewId) => {
    if (!confirm("Voulez-vous vraiment supprimer ce commentaire ?")) return;

    try {
      await axios.delete(`${reviewAPI}/${reviewId}`, {
        headers: { Authorization: `Bearer ${jwtToken}` }
      });

      setUserComments(prev => prev.filter(c => c.reviewId !== reviewId));
      showToast("Commentaire supprimé");
    } catch (err) {
      console.error(err);
      showToast("Erreur lors de la suppression", "error");
    }
  };

  const SavePrivateInfo = async () => {
    // CAS 1 : aucun changement de mot de passe
    if (!priv.password && !priv.confirmPassword) {
      try {
        const res = await fetch(userAPI, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`
          },
          body: JSON.stringify({
            userId,
            email: priv.email,
            password: null
          })
        });

        if (!res.ok) throw new Error("Update failed");
        showToast("Email mis à jour");
        return;
      } catch (err) {
        showToast(err.message, "error");
        return;
      }
    }

    // CAS 2 : password rempli → validation obligatoire
    if (!validatePrivateInfo()) return;

    try {
      const res = await fetch(userAPI, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`
        },
        body: JSON.stringify({
          userId,
          email: priv.email,
          password: priv.password
        })
      });

      if (!res.ok) throw new Error("Update failed");

      showToast("Email et mot de passe mis à jour");

      setPriv((p) => ({
        ...p,
        password: "",
        confirmPassword: ""
      }));
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  const SavePublicInfo = async () => {
    try {
      const res = await fetch(`${userAPI}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtToken}`
        },
        body: JSON.stringify({
          userId,
          firstName: user.firstName || null,
          lastName: user.lastName || null,
          phone: user.phone || null,
          address: user.address || null,
          sex: user.sex || null,
          dateOfBirth: user.dob || null,
          profileImage: user.avatar || null
        })
      });

      if (!res.ok) throw new Error("Update failed");
      showToast("Informations personnelles enregistrées");
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  const sexeOptions = [
    { value: "Female", label: "female" },
    { value: "Male", label: "male" },
  ];

  const showToast = (msg, type = "success") => {
    setToast({ message: msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  const updateUser = (field) => (e) => {
    setUser((u) => ({ ...u, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const updatePriv = (field) => (e) => {
    setPriv((p) => ({ ...p, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      showToast("L'image ne doit pas dépasser 2 Mo", "error");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      setUser((u) => ({ ...u, avatar: event.target.result }));
      showToast("Photo de profil mise à jour");
    };
    reader.readAsDataURL(file);
  };

  const validatePrivateInfo = () => {
    const newErrors = {};
    if (priv.password && priv.password.length < 6)
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
    if (priv.password !== priv.confirmPassword)
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleViewComments = () => setCurrentPage("comments");
  const handleBackToProfile = () => setCurrentPage("profile");

  // Helpers pour éviter les undefined
  const fullName = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "User";

  if (loading) return (<div>loading....</div>);

  // Page commentaires
  if (currentPage === "comments") {
    return (
      <>
        <TopNav />
        <style>{styles.global}</style>
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <div style={styles.container}>
          <CommentsPage
            comments={userComments}
            loading={commentsLoading}
            onBack={handleBackToProfile}
            onDelete={handleDeleteComment}
          />
        </div>
      </>
    );
  }

  // Page profil principale
  return (
    <>
      <TopNav />
      <style>{styles.global}</style>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <div style={styles.avatarContainer}>
            <Avatar src={user.avatar} name={fullName} size={90} />
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
            <div style={styles.userName}>{fullName}</div>
            <div style={styles.userEmail}>{priv.email ?? ""}</div>
          </div>
          <button style={styles.logoutButton} onClick={logout}>Logout</button>
        </aside>

        <main style={styles.main}>
          <div style={styles.pageHeader}>
            <h1 style={styles.pageTitle}>Profil</h1>
            <p style={styles.pageSubtitle}>
              Gérez vos informations personnelles et la sécurité de votre compte.
            </p>
          </div>

          <div style={styles.sectionsGrid}>
            {/* Section publique */}
            <SectionCard title="Informations personnelles">
              <div style={styles.formGrid}>
                <InputField label="Prénom" value={user.firstName ?? ""} onChange={updateUser("firstName")} placeholder="Votre prénom" />
                <InputField label="Nom" value={user.lastName ?? ""} onChange={updateUser("lastName")} placeholder="Votre nom" />
                <InputField label="Téléphone" value={user.phone ?? ""} onChange={updateUser("phone")} placeholder="+212 6 00 00 00 00" />
                <SelectField label="Genre" value={user.sex ?? ""} onChange={updateUser("sex")} options={sexeOptions} />
                <InputField label="Date de naissance" type="date" value={user.dob ?? ""} onChange={updateUser("dob")} />
                <InputField label="Adresse" value={user.address ?? ""} onChange={updateUser("address")} placeholder="Votre adresse complète" />
              </div>

              <div style={styles.photoSection}>
                <Avatar src={user.avatar} name={fullName} size={56} />
                <div style={styles.photoInfo}>
                  <div style={styles.photoTitle}>Photo de profil</div>
                  <div style={styles.photoSubtitle}>Formats JPG, PNG. Max 2 Mo.</div>
                  <button onClick={() => fileRef.current.click()} style={styles.photoButton}>
                    Changer la photo
                  </button>
                </div>
              </div>

              <div style={styles.actionButtons}>
                <button onClick={SavePublicInfo} style={styles.saveButton}>
                  Enregistrer
                </button>
              </div>
            </SectionCard>

            {/* Section privée */}
            <SectionCard title="Sécurité et Confidentialité">
              <div style={styles.formGrid}>
                <InputField
                  label="Adresse e-mail"
                  type="email"
                  value={priv.email ?? ""}
                  onChange={updatePriv("email")}
                  placeholder="votre@email.com"
                />
                <div />
                <InputField
                  label="Nouveau mot de passe"
                  type="password"
                  value={priv.password ?? ""}
                  onChange={updatePriv("password")}
                  placeholder="••••••••"
                  error={errors.password}
                />
                <InputField
                  label="Confirmer le mot de passe"
                  type="password"
                  value={priv.confirmPassword ?? ""}
                  onChange={updatePriv("confirmPassword")}
                  placeholder="••••••••"
                  error={errors.confirmPassword}
                />
              </div>
              <div style={styles.actionButtons}>
                <button onClick={SavePrivateInfo} style={styles.saveButton}>
                  Enregistrer
                </button>
              </div>
            </SectionCard>
          </div>

          <div style={styles.historySection}>
            <div>
              <div style={styles.historyTitle}>Historique des commentaires</div>
              <div style={styles.historySubtitle}>
                {userComments.length > 0
                  ? `Vous avez laissé ${userComments.length} commentaire${userComments.length > 1 ? "s" : ""}.`
                  : "Retrouvez tous vos avis et commentaires laissés sur vos achats."
                }
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