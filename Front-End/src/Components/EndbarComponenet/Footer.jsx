import "../../pages/Styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h3 className="footer-brand">TechStore</h3>
          <p className="footer-muted">Votre boutique de technologie de confiance depuis 2020</p>
        </div>

        <div className="footer-col">
          <h4>Liens rapides</h4>
          <ul>
            <li>Produits</li>
            <li>À propos</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Aide</h4>
          <ul>
            <li>FAQ</li>
            <li>Livraison</li>
            <li>Retours</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p className="footer-muted">Inscrivez-vous pour recevoir nos offres</p>
          <div className="newsletter">
            <input type="email" placeholder="Votre email" />
            <button>S'inscrire</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2024 TechStore. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;


