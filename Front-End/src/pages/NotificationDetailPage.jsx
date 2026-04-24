import TopNav from "../Components/navbarComponent/TopNav";
import NotificationDetailCard from "../Components/NotificationComponents/NotificationDetailCard";
import "./Styles/NotificationDetail.css";
import { Link } from "react-router-dom";

function NotificationDetail() {
  return (
    <>
      <TopNav />

      <div className="detail-container">
        <h1 className="detail-title">Détail de la notification</h1>

        <NotificationDetailCard />

        <div className="detail-actions">
          <button className="back-btn">
            <Link to="/notification">← Retour aux notifications</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default NotificationDetail;