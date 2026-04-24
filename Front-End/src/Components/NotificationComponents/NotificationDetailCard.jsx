import "../styles/NotificationDetailCard.css";

function NotificationDetailCard() {
  return (
    <div className="detail-card">
      <h2>Notification 1</h2>

      <p className="detail-description">
        Description de la notification 1
      </p>

      <div className="detail-info">
        <span className="status">Statut : Non lu</span>
        <span className="date">Date : 2024-05-01</span>
      </div>
    </div>
  );
}

export default NotificationDetailCard;