import "../styles/Notification.css";
import { useNavigate } from "react-router-dom";

function Notification({ titre, description, status, id, date, updatestatus, deleteNotification, notifData }) {
  const navigate = useNavigate();

  const descriptionLimit =
    description && description.length > 60
      ? description.substring(0, 60) + "..."
      : description;

  const handleClick = () => {
    updatestatus();
    navigate("/notificationDetail", { state: { notif: notifData } });
  };

  return (
    <div
      className={`notification ${status === "Non lu" ? "unread" : "read"}`}
      onClick={handleClick}
    >
      <div className="notification-header">
        <div className="notification-title">{titre}</div>
        <small className="notification-date">
          {date ? new Date(date).toLocaleDateString("fr-FR") : ""}
        </small>
      </div>

      <div className="notification-description">{descriptionLimit}</div>

      <div className={`notification-status ${status === "Non lu" ? "non-lu" : "lu"}`}>
        {status}
      </div>

      <div className="notification-actions">
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            deleteNotification(id);
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default Notification;