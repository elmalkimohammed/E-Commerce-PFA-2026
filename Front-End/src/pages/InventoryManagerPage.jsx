import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TopNavInventory from "../Components/navbarComponent/TopNavInventory";
import InventorySideBar from "../Components/InventoryPage/InventorySideBar";
import InventoryPage from "../Components/InventoryPage/InventoryPage";
import CreateInventoryPage from "../Components/InventoryPage/CreateInventoryPage";
import LogsInventoryPage from "../Components/InventoryPage/LogsInventoryPage";
import "./Styles/InventoryManager.css";

function InventoryManagerPage() {
  const [activePage, setActivePage] = useState("inventory");
  const [currentTable, setCurrentTable] = useState("products");
  const [isAuthorized, setIsAuthorized] = useState(null);
  const navigate = useNavigate();

  const getUserRoleFromToken = () => {
    try {
      const token = localStorage.getItem("generatedJWT_Token");
      if (!token) return null;
      
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const decodedToken = JSON.parse(jsonPayload);
      return decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  useEffect(() => {
    const userRole = getUserRoleFromToken();
    
    if (!userRole) {
      setIsAuthorized(false);
      navigate("/Authentication");
    } else if (userRole.toLowerCase() !== "invet") {
      setIsAuthorized(false);
      navigate("/");
    } else {
      setIsAuthorized(true);
    }
  }, [navigate]);

  if (isAuthorized === null) {
    return <div className="loading-container">Loading...</div>;
  }

  if (!isAuthorized) {
    return null;
  }

  return (
    <div className="inventory-manager-container">
      <TopNavInventory 
        activePage={activePage}
        onPageChange={setActivePage}
      />
      
      <div className="inventory-manager-content">
        <h1 className="inventory-manager-title">Inventory Manager</h1>
        
        <div className="inventory-manager-layout">
          {/* Sidebar with table buttons - only shows on inventory page */}
          {activePage === "inventory" && (
            <InventorySideBar 
              currentTable={currentTable}
              onTableChange={setCurrentTable}
            />
          )}
          
          <div className="inventory-manager-main">
            {activePage === "inventory" && (
              <InventoryPage 
                currentTable={currentTable}
                onTableChange={setCurrentTable}
              />
            )}
            {activePage === "create" && <CreateInventoryPage />}
            {activePage === "logs" && <LogsInventoryPage />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryManagerPage;