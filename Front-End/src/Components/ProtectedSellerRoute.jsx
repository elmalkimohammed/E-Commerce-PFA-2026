import { Navigate } from "react-router-dom";

function ProtectedSellerRoute({ children }) {
  const isSubscribed = localStorage.getItem("isSubscribed") === "true";

  if (!isSubscribed) {
    return <Navigate to="/subscription" />;
  }

  return children;
}

export default ProtectedSellerRoute;