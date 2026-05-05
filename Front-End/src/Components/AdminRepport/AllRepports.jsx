import { useEffect, useState } from "react";
import { repportAPI } from "../../services/servicesAPI";
import "../styles/Repport.css";

function AllRepports() {
    const [repports, setRepports] = useState([]);
    const [editing, setEditing] = useState(null);
    const [viewing, setViewing] = useState(null);

    const fetchAll = () => {
        fetch(`${repportAPI}`)
            .then(res => res.json())
            .then(data => setRepports(Array.isArray(data) ? data : []))
            .catch(err => console.error(err));
    };

    useEffect(() => { fetchAll(); }, []);

    const handleDelete = async (id) => {
        if (!confirm("Supprimer cette réclamation ?")) return;
        await fetch(`${repportAPI}/${id}`, { method: "DELETE" });
        fetchAll();
    };

    const handleEdit = (r, e) => { e.stopPropagation(); setEditing({ ...r }); };
    const handleView = (r) => setViewing(r);

    const handleEditChange = (e) => {
        setEditing({ ...editing, [e.target.id]: e.target.value });
    };

    const handleUpdate = async () => {
        await fetch(repportAPI, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                RepportId: editing.RepportId,
                UserID: editing.UserID,
                SourceEmail: editing.SourceEmail,
                Title: editing.Title,
                Description: editing.Description
            })
        });
        setEditing(null);
        fetchAll();
    };

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
                            <button className="btn-edit" onClick={(e) => { setViewing(null); handleEdit(viewing, e); }}>
                                ✏️ Modifier
                            </button>
                            <button className="btn-cancel" onClick={() => setViewing(null)}>Fermer</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {editing && (
                <div className="modal-overlay" onClick={() => setEditing(null)}>
                    <div className="modal-box" onClick={e => e.stopPropagation()}>
                        <h3>Modifier la réclamation</h3>
                        <div className="modal-field">
                            <label htmlFor="SourceEmail">Email</label>
                            <input id="SourceEmail" value={editing.SourceEmail} onChange={handleEditChange} />
                        </div>
                        <div className="modal-field">
                            <label htmlFor="Title">Titre</label>
                            <input id="Title" value={editing.Title} onChange={handleEditChange} />
                        </div>
                        <div className="modal-field">
                            <label htmlFor="Description">Description</label>
                            <textarea id="Description" value={editing.Description} onChange={handleEditChange} />
                        </div>
                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={() => setEditing(null)}>Annuler</button>
                            <button className="btn-save" onClick={handleUpdate}>Sauvegarder</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="card-header">
                <h2>Réclamations</h2>
                <p>{repports.length} réclamation{repports.length !== 1 ? "s" : ""}</p>
            </div>

            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repports.length === 0 ? (
                            <tr className="empty-row">
                                <td colSpan="4">Aucune réclamation</td>
                            </tr>
                        ) : repports.map(r => (
                            <tr key={r.RepportId} className="clickable-row" onClick={() => handleView(r)}>
                                <td>{r.SourceEmail}</td>
                                <td className="title-cell">{r.Title}</td>
                                <td className="desc-cell">
                                    <span title={r.Description}>{truncate(r.Description)}</span>
                                </td>
                                <td className="actions-cell" onClick={e => e.stopPropagation()}>
                                    <button className="btn-edit bi bi-pencil" onClick={(e) => handleEdit(r, e)}> Modifier</button>
                                    <button className="btn-delete bi bi-trash" onClick={() => handleDelete(r.RepportId)}> Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllRepports;