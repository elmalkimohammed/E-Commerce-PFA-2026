import TopNav from "../Components/navbarComponent/TopNav";
import NotificationRow from "../Components/NotificationComponents/NotificationRow";
import "./Styles/NotificationPage.css";

function Notification() {
  return (
    <>
      <TopNav />

      <div className="report-container">
        <h1 className="report-title">Notifications</h1>
            <div className="notification-search">
              <input
                type="text"
                placeholder="Rechercher une notification..."
                />
            </div>
          <div className="notification-list">
          <NotificationRow />
        </div>
      </div>
    </>
  );
}

export default Notification;