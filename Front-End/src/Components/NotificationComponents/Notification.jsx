import "../styles/Notification.css";
import { Link } from "react-router-dom";
function Notification({titre, description,status, id,updatestatus ,deleteNotification}) {
    const decriptionlimit = 
    description.length > 12 ? 
    description.substring(0, 12) + "..." 
    : description;
     
  return (
    <div className="notification">
      <div className="notification-title">{titre}</div>

      <div className="notification-description">
        {decriptionlimit}
      </div>

      <div className={`notification-status ${status.toLowerCase().replace(" ", "-")}`}>
        {status}
      </div>
      <div className="notification-actions">
          <Link to="/repport">
            <button className="reply-btn" onClick={()=> updatestatus()}>
              répondre au message
            </button>
          </Link>
          <button className="delete-btn" onClick={() => deleteNotification(id)}>
            Supprimer
          </button>
      </div>
    </div>
  );
}

export default Notification;