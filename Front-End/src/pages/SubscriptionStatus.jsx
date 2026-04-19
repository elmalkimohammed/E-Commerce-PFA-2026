import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/SubscriptionStatus.css";

function SubscriptionStatus() {
  const [subscription, setSubscription] = useState({
    isSubscribed: false,
    plan: null,
    subscriptionDate: null
  });
  const navigate = useNavigate();

  useEffect(() => {
    const isSubscribed = localStorage.getItem("isSubscribed") === "true";
    const plan = localStorage.getItem("subscriptionPlan") 
      ? JSON.parse(localStorage.getItem("subscriptionPlan")) 
      : null;
    const subscriptionDate = localStorage.getItem("subscriptionDate");
    
    setSubscription({ isSubscribed, plan, subscriptionDate });
  }, []);

  if (!subscription.isSubscribed) {
    return (
      <div className="subscription-status-page">
        <div className="status-card">
          <div className="status-icon">❌</div>
          <h1>No Active Subscription</h1>
          <p>You don't have an active subscription plan.</p>
          <button 
            className="seller-btn primary"
            onClick={() => navigate("/subscription")}
          >
            Subscribe Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="subscription-status-page">
      <div className="status-card">
        <div className="status-icon success">✅</div>
        <h1>Subscription Active!</h1>
        <p>You can now start selling your products on TechStore</p>
        
        <div className="subscription-details">
          <div className="detail-row">
            <span className="detail-label">Plan:</span>
            <span className="detail-value">{subscription.plan?.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Price:</span>
            <span className="detail-value">{subscription.plan?.currency}{subscription.plan?.price}/{subscription.plan?.period}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Status:</span>
            <span className="detail-value">Active ✅</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Subscribed on:</span>
            <span className="detail-value">
              {subscription.subscriptionDate 
                ? new Date(subscription.subscriptionDate).toLocaleDateString() 
                : "N/A"}
            </span>
          </div>
        </div>
        
        <div className="seller-actions">
          <button 
            className="seller-btn primary"
            onClick={() => navigate("/SellerPortal")}
          >
            Go to Seller Dashboard
          </button>
          <button 
            className="seller-btn secondary"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionStatus;