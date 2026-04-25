import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../Components/navbarComponent/TopNav";
import RepportForm from "../Components/RepportComponents/RepportForm";
import { repportAPI } from "../services/servicesAPI";
import "./Styles/RepportPage.css";

function RepportPage() {
    const [myRepports, setMyRepports] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    let userID = null;
    let role = null;
    if (token) {
        try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            userID = payload.sub;
            role = payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        } catch (e) {}
    }

    useEffect(() => {
        if (!token || role !== "HelpCenter") navigate("/");
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

    return (
        <>
            <TopNav />
            <div className="report-container">
                <h1 className="report-title">Soumettre une Réclamation</h1>
                <RepportForm userID={userID} onSubmitSuccess={fetchMyRepports} />

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
                                <td colSpan="4" style={{ textAlign: "center" }}>
                                    Aucune réclamation
                                </td>
                            </tr>
                        ) : (
                            myRepports.map(r => (
                                <tr key={r.RepportId}>
                                    <td>{r.SourceEmail}</td>
                                    <td>{r.Title}</td>
                                    <td>{r.Description}</td>
                                    <td>{new Date(r.CreatedAt).toLocaleString()}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default RepportPage;