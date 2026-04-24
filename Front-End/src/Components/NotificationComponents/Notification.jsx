import "../styles/Notification.css";
import { useNavigate } from "react-router-dom";
function Notification({titre, description,status, id,updatestatus ,deleteNotification,onClick}) {
    const decriptionlimit = 
    description.length > 12 ? 
    description.substring(0, 12) + "..." 
    : description;
    const navigate = useNavigate();
     
  return (
    <div className="notification" onClick={onClick}>
      <div className="notification-title">{titre}</div>

      <div className="notification-description">
        {decriptionlimit}
      </div>

      <div className={`notification-status ${status.toLowerCase().replace(" ", "-")}`}>
        {status}
      </div>
      <div className="notification-actions">
          
            <button
              className="reply-btn"
              onClick={(e) => {e.stopPropagation();
                updatestatus();
                navigate("/repport"); 
              }}
            >
              répondre au message
            </button>
          
          <button className="delete-btn" onClick={(e) => {
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