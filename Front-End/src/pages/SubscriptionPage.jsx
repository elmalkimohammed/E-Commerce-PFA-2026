import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/SubscriptionPage.css";

function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  const plans = [
    { 
      id: 1, 
      name: "Basic", 
      price: 10, 
      currency: "$", 
      period: "month",
      features: [
        "10 products listing",
        "Basic analytics",
        "Email support",
        "30 days order tracking"
      ],
      color: "#6c757d",
      popular: false
    },
    { 
      id: 2, 
      name: "Pro", 
      price: 25, 
      currency: "$", 
      period: "month",
      features: [
        "50 products listing",
        "Advanced analytics",
        "Priority support",
        "90 days order tracking",
        "Promotion tools"
      ],
      color: "#0d6efd",
      popular: true
    },
    { 
      id: 3, 
      name: "Premium", 
      price: 50, 
      currency: "$", 
      period: "month",
      features: [
        "Unlimited products",
        "Real-time analytics",
        "24/7 VIP support",
        "Unlimited order tracking",
        "Advanced promotion tools",
        "API access"
      ],
      color: "#198754",
      popular: false
    },
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubscribe = () => {
    if (!selectedPlan) {
      alert("Please select a plan first");
      return;
    }
    setShowPayment(true);
  };

  const handlePaymentConfirm = (paymentMethod) => {
    // Save to localStorage
    localStorage.setItem("isSubscribed", "true");
    localStorage.setItem("subscriptionPlan", JSON.stringify(selectedPlan));
    localStorage.setItem("subscriptionDate", new Date().toISOString());
    
    // Navigate to status page
    navigate("/subscription/status");
  };

  return (
    <div className="subscription-page">
      <div className="subscription-header">
        <h1>Choose Your Seller Plan</h1>
        <p>Start selling your products on TechStore</p>
      </div>

      {!showPayment ? (
        <>
          <div className="plans-container">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`plan-card ${selectedPlan?.id === plan.id ? "selected" : ""} ${plan.popular ? "popular" : ""}`}
                onClick={() => handlePlanSelect(plan)}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">{plan.currency}</span>
                  <span className="price">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <i className="bi bi-check-circle-fill"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="subscription-action">
            <button 
              className={`subscribe-btn ${!selectedPlan ? "disabled" : ""}`}
              onClick={handleSubscribe}
              disabled={!selectedPlan}
            >
              Continue with {selectedPlan?.name || "Selected Plan"}
            </button>
          </div>
        </>
      ) : (
        <div className="payment-section">
          <h2>Complete Payment</h2>
          <div className="payment-summary">
            <h3>Selected Plan: {selectedPlan?.name}</h3>
            <p className="total-amount">
              Total: {selectedPlan?.currency}{selectedPlan?.price}/{selectedPlan?.period}
            </p>
          </div>
          
          <PaymentForm onConfirm={handlePaymentConfirm} />
        </div>
      )}
    </div>
  );
}

// Payment Form Component
function PaymentForm({ onConfirm }) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(paymentMethod);
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <div className="payment-methods">
        <label className={paymentMethod === "card" ? "active" : ""}>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <i className="bi bi-credit-card"></i> Credit Card
        </label>
        <label className={paymentMethod === "paypal" ? "active" : ""}>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <i className="bi bi-paypal"></i> PayPal
        </label>
        <label className={paymentMethod === "orange" ? "active" : ""}>
          <input
            type="radio"
            value="orange"
            checked={paymentMethod === "orange"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <i className="bi bi-phone"></i> Orange Money
        </label>
      </div>

      {paymentMethod === "card" && (
        <div className="card-details">
          <input
            type="text"
            placeholder="Card Number"
            value={cardDetails.number}
            onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
            required
          />
          <div className="card-row">
            <input
              type="text"
              placeholder="MM/YY"
              value={cardDetails.expiry}
              onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="CVC"
              value={cardDetails.cvc}
              onChange={(e) => setCardDetails({...cardDetails, cvc: e.target.value})}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Cardholder Name"
            value={cardDetails.name}
            onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
            required
          />
        </div>
      )}

      <button type="submit" className="confirm-payment-btn">
        Confirm & Subscribe
      </button>
    </form>
  );
}

export default SubscriptionPage;