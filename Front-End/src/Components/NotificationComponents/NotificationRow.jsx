import Notification from "./Notification";
import { useState, useEffect } from "react";
import "../styles/NotificationRow.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NOTIF_API = "http://localhost/api/notifications";

function NotificationRow() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState(null);

  // Récupère l'userId depuis le JWT stocké
  const getUserId = () => {
    try {
      const token = localStorage.getItem("generatedJWT_Token");
      if (!token) return null;
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.sub || payload.userId || payload.id || null;
    } catch {
      return null;
    }
  };

  // ── Charger les notifications ──
  useEffect(() => {
    const userId = getUserId();
    if (!userId) { setLoading(false); return; }

    axios.get(`${NOTIF_API}/user/${userId}`)
      .then((res) => setNotifications(res.data))
      .catch((err) => setError("Impossible de charger les notifications."))
      .finally(() => setLoading(false));
  }, []);

  // ── Supprimer une notification ──
  const deleteNotif = async (id) => {
    try {
      await axios.delete(`${NOTIF_API}/${id}`);
      setNotifications((prev) => prev.filter((n) => n.notificationId !== id));
    } catch {
      alert("Erreur lors de la suppression.");
    }
  };

  // ── Marquer comme lue ──
  const markAsRead = async (id) => {
    try {
      const res = await axios.patch(`${NOTIF_API}/${id}/read`);
      setNotifications((prev) =>
        prev.map((n) => n.notificationId === id ? res.data : n)
      );
    } catch {
      alert("Erreur lors de la mise à jour.");
    }
  };

  // ── Vider toutes les notifications ──
  const clearAll = async () => {
    const userId = getUserId();
    if (!userId) return;
    try {
      await axios.delete(`${NOTIF_API}/user/${userId}/clear`);
      setNotifications([]);
    } catch {
      alert("Erreur lors de la suppression.");
    }
  };

  if (loading) return <p className="notif-loading">Chargement...</p>;
  if (error)   return <p className="notif-error">{error}</p>;
  if (notifications.length === 0) return <p className="notif-empty">Aucune notification.</p>;

  return (
    <div className="notification-row">
      {notifications.map((notif) => (
        <Notification
          key={notif.notificationId}
          id={notif.notificationId}
          titre={notif.title}
          description={notif.message}
          status={notif.status === "READ" ? "Lu" : "Non lu"}
          date={notif.createdAt}
          notifData={notif}
          onClick={() => markAsRead(notif.notificationId)}
          updatestatus={() => markAsRead(notif.notificationId)}
          deleteNotification={() => deleteNotif(notif.notificationId)}
        />
      ))}

      <div>
        <button className="danger" onClick={clearAll}>
          Vider tout
        </button>
      </div>
    </div>
  );
}

export default NotificationRow;