import "../styles/NotificationDetailCard.css";
import { useLocation, useNavigate } from "react-router-dom";

function NotificationDetailCard() {
  const { state } = useLocation();
  const navigate  = useNavigate();
  const notif     = state?.notif;

  if (!notif) {
    return (
      <div className="detail-card">
        <p>Notification introuvable.</p>
        <button onClick={() => navigate("/notification")}>← Retour</button>
      </div>
    );
  }

  return (
    <div className="detail-card">
      <h2>{notif.title}</h2>

      <p className="detail-description">{notif.message}</p>

      <div className="detail-info">
        <span className="status">
          Statut : {notif.status === "READ" ? "Lu" : "Non lu"}
        </span>
        <span className="date">
          Date : {new Date(notif.createdAt).toLocaleDateString("fr-FR")}
        </span>
      </div>

      <div className="detail-type" style={{ marginTop: "12px", fontSize: "13px", color: "#888" }}>
        Type : {notif.type}
      </div>
    </div>
  );
}

export default NotificationDetailCard;