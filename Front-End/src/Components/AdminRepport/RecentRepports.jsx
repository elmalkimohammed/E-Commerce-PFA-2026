import { useEffect, useState } from "react";
import { repportAPI } from "../../services/servicesAPI";
import "../styles/Repport.css";

function RecentRepports() {
    const [repports, setRepports] = useState([]);
    const [viewing, setViewing] = useState(null);

    useEffect(() => {
        fetch(`${repportAPI}/recent`)
            .then(res => res.json())
            .then(data => setRepports(Array.isArray(data) ? data : []))
            .catch(err => console.error(err));
    }, []);

    const truncate = (text, len = 15) =>
        text && text.length > len ? text.slice(0, len) + "..." : text;

    return (
        <div className="repport-card">

            {/* Detail Modal */}
            {viewing && (
                <div className="modal-overlay" onClick={() => setViewing(null)}>
                    <div className="modal-box detail-box" onClick={e => e.stopPropagation()}>
                        <div className="detail-header">
                            <h3>Détail de la réclamation</h3>
                            <button className="detail-close" onClick={() => setViewing(null)}>✕</button>
                        </div>
                        <div className="detail-field">
                            <span className="detail-label">Email</span>
                            <span className="detail-value">{viewing.SourceEmail}</span>
                        </div>
                        <div className="detail-field">
                            <span className="detail-label">Titre</span>
                            <span className="detail-value">{viewing.Title}</span>
                        </div>
                        <div className="detail-field">
                            <span className="detail-label">Description</span>
                            <span className="detail-value detail-desc">{viewing.Description}</span>
                        </div>
                        {viewing.CreatedAt && (
                            <div className="detail-field">
                                <span className="detail-label">Créée le</span>
                                <span className="detail-value">
                                    {new Date(viewing.CreatedAt).toLocaleString("fr-FR")}
                                </span>
                            </div>
                        )}
                        <div className="modal-actions" style={{ marginTop: "20px" }}>
                            <button className="btn-cancel" onClick={() => setViewing(null)}>Fermer</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="card-header">
                <h2>Réclamations Créées</h2>
                <p>Réclamations récentes</p>
            </div>

            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Créée le</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repports.length === 0 ? (
                            <tr className="empty-row">
                                <td colSpan="4">Aucune réclamation récente</td>
                            </tr>
                        ) : repports.map(r => (
                            <tr key={r.RepportId} className="clickable-row" onClick={() => setViewing(r)}>
                                <td>{r.SourceEmail}</td>
                                <td className="title-cell">{r.Title}</td>
                                <td className="desc-cell">
                                    <span title={r.Description}>{truncate(r.Description)}</span>
                                </td>
                                <td className="date-cell">{new Date(r.CreatedAt).toLocaleString("fr-FR")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RecentRepports;