import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNavAdmin from "../Components/navbarComponent/TopNavAdmin";
import RepportSideBar from "../Components/AdminRepport/RepportSideBar";
import AllRepports from "../Components/AdminRepport/AllRepports";
import RecentRepports from "../Components/AdminRepport/RecentRepports";
import "./Styles/MonitoringPage.css";

function AdminRepportPage() {
    const [currentPage, setCurrentPage] = useState("reclamations");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) { navigate("/"); return; }
        try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            const role = payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
            if (role !== "HelpCenter") navigate("/");
        } catch (e) { navigate("/"); }
    }, []);

    return (
        <div className="MonitoringParent">
            <TopNavAdmin />
            <div className="containerBox">
                <RepportSideBar onSwitch={setCurrentPage} />
                {currentPage === "reclamations" && <AllRepports />}
                {currentPage === "reclamationsCreees" && <RecentRepports />}
            </div>
        </div>
    );
}

export default AdminRepportPage;