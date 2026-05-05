import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../Components/navbarComponent/TopNav";
import RepportForm from "../Components/RepportComponents/RepportForm";
import { repportAPI } from "../services/servicesAPI";
import "./Styles/RepportPage.css";

function RepportPage() {
    const [myRepports, setMyRepports] = useState([]);
    const [toast, setToast] = useState(null);
    const navigate = useNavigate();

    const token = localStorage.getItem("generatedJWT_Token");
    let userID = null;
    if (token) {
        try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            userID = payload.sub;
        } catch (e) {}
    }

    useEffect(() => {
        if (!token) navigate("/");
    }, []);

    const fetchMyRepports = () => {
        fetch(repportAPI)
            .then(res => res.json())
            .then(data => {
                const mine = data.filter(r => r.UserID === userID);
                setMyRepports(mine);
            })
            .catch(err => console.error(err));
    };

    useEffect(() => { fetchMyRepports(); }, []);

    const showToast = (msg, type = "success") => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3000);
    };

    return (
        <>
            <TopNav />

            {/* Toast */}
            {toast && (
                <div style={{
                    position: "fixed", top: "80px", right: "24px", zIndex: 9999,
                    background: toast.type === "success" ? "#000" : "#e31837",
                    color: "#fff",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "14px", fontWeight: 700,
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    padding: "14px 24px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
                }}>
                    {toast.type === "success" ? "✓" : "✕"} {toast.msg}
                </div>
            )}

            <div className="report-container">
                <h1 className="report-title">Soumettre une Réclamation</h1>

                <RepportForm
                    userID={userID}
                    onSubmitSuccess={() => {
                        fetchMyRepports();
                        showToast("Réclamation envoyée avec succès");
                    }}
                    onError={() => showToast("Erreur lors de l'envoi", "error")}
                />

                <h2 className="report-title" style={{ marginTop: "2rem" }}>
                    Mes Réclamations
                </h2>

                <table className="repport-table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Créée le</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myRepports.length === 0 ? (
                            <tr>
                                <td colSpan="4">Aucune réclamation</td>
                            </tr>
                        ) : myRepports.map(r => (
                            <tr key={r.RepportId}>
                                <td>{r.SourceEmail}</td>
                                <td>{r.Title}</td>
                                <td>{r.Description}</td>
                                <td>{new Date(r.CreatedAt).toLocaleString("fr-FR")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default RepportPage;
