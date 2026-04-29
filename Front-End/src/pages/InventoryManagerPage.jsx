import { useState } from "react";
import { Navigate } from "react-router-dom";
import TopNavAdmin from "../Components/navbarComponent/TopNavAdmin";
import InventorySideBar from "../Components/InventoryPage/inventorySideBar";
import InventoryMonitor from "../Components/InventoryPage/inventoryMonitor";
import InventoryCrud from "../Components/InventoryPage/inventoryCrud";
import { getUserRoleFromToken } from "../utils/authRole";
import "./Styles/MonitoringPage.css";

function InventoryManagerPage() {
  const [currentPage, setCurrentPage] = useState("products");
  const userRole = getUserRoleFromToken();

  if (!userRole) {
    return <Navigate to="/Authentication" replace />;
  }

  if (userRole !== "Invet") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="MonitoringParent">
      <TopNavAdmin />
      <div className="containerBox">
        <InventorySideBar onSwitch={setCurrentPage} />
        <div style={{ width: "78%" }}>
          <h2>1st Section (Surveillance)</h2>
          <InventoryMonitor currentPage={currentPage} />
          <h2 style={{ marginTop: "16px" }}>
            2nd Section (Affectation CRUD)
          </h2>
          <InventoryCrud />
        </div>
      </div>
    </div>
  );
}

export default InventoryManagerPage;