import Notification from "./Notification";
import { useState } from "react";
import "../styles/NotificationRow.css";
import { useNavigate} from "react-router-dom";

const testdonnes = [
  {
    id: 1,
    titre: "Notification 1",
    description: "Description de la notification 1",
    status: "Non lu",
    date_ajout: "2024-05-01",
  },
  {
    id: 2,
    titre: "Notification 2",
    description: "bonjour test 2",
    status: "Lu",
    date_ajout: "2024-06-01",
  },
  {
    id: 3,
    titre: "Notification 3",
    description: "more than 1000 3",
    status: "fini",
    date_ajout: "2024-06-02",
  },
  {
    id: 4,
    titre: "Notification 4",
    description: "more than 1000 4",
    status: "fini",
    date_ajout: "2024-06-02",
  },
  {
    id: 5,
    titre: "Notification 5",
    description: "more than 1000 5",
    status: "fini",
    date_ajout: "2024-06-02",
  },
  {
    id: 6,
    titre: "Notification 6",
    description: "more than 1000 6",
    status: "fini",
    date_ajout: "2024-06-02",
  },
];



function NotificationRow() {
  const navigate = useNavigate();
     
    const [notification, setNotification] = useState(testdonnes);
    const vider = () => {
    setNotification([]); 
    };
    const deleteid = (id) => {
      setNotification(
        notification.filter((notif) => notif.id !== id));
    };
    const updateStatus = (id) => {
    setNotification((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id && notif.status === "Non lu"
          ? { ...notif, status: "Lu" }
          : notif
      )
    );
    };
  return (
    <div className="notification-row">
      {notification.map((notif) => (
        <Notification
         key={notif.id}
          id={notif.id}
          onClick={() => navigate(`/notificationDetail`)}
          titre={notif.titre}
          description={notif.description}
          status={notif.status}
          updatestatus={() => updateStatus(notif.id)}
          deleteNotification={deleteid}

        />
      ))
      }
        {notification.length > 0 && (
        <div>
          <button className="danger" onClick={vider}>
            vider la page
          </button>
        </div>
      )}
      
    </div>
  );
}

export default NotificationRow;