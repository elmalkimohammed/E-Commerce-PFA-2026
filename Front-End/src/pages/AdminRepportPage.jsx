import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNavHelpCenter from "../Components/navbarComponent/TopNavHelpCenter";
import AllRepports from "../Components/AdminRepport/AllRepports";
import RecentRepports from "../Components/AdminRepport/RecentRepports";
import LogsViewer from "../Components/AdminRepport/LogsViewer";
import "./Styles/AdminRepportPage.css";

function AdminRepportPage() {
    const [currentPage, setCurrentPage] = useState("reclamationsCreees");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("generatedJWT_Token");
        if (!token) { navigate("/"); return; }
        try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            const role = payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
            if (role !== "HelpCenter") navigate("/");
        } catch (e) { navigate("/"); }
    }, []);

    return (
        <div className="repport-parent">
            <TopNavHelpCenter currentPage={currentPage} onSwitch={setCurrentPage} />
            <main className="repport-main">
                {currentPage === "reclamations"       && <AllRepports />}
                {currentPage === "reclamationsCreees" && <RecentRepports />}
                {currentPage === "logs"               && <LogsViewer />}
            </main>
        </div>
    );
}

export default AdminRepportPage;
