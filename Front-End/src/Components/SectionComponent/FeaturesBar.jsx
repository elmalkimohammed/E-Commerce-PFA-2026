import "../../pages/Styles/featuresBar.css";

function FeaturesBar() {
  const features = [
    { icon: "bi bi-truck", title: "Livraison gratuite", desc: "À partir de 50€ d'achat" },
    { icon: "bi bi-lock", title: "Paiement sécurisé", desc: "100% transactions protégées" },
    { icon: "bi bi-arrow-counterclockwise", title: "Retour gratuit", desc: "Sous 30 jours" },
    { icon: "bi bi-chat-dots", title: "Support 24/7", desc: "À votre service" },
  ];

  return (
    <div className="features-bar">
      <div className="features-grid">
        {features.map((f) => (
          <div className="feature-item" key={f.title}>
            <div className="feature-icon">
              <i className={f.icon}></i>
            </div>
            <div className="feature-text">
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesBar;


