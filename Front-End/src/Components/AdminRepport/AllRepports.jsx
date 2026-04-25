import { useEffect, useState } from "react";
import { repportAPI } from "../../services/servicesAPI";

function AllRepports() {
    const [repports, setRepports] = useState([]);
    const [editing, setEditing] = useState(null);

    const fetchAll = () => {
        fetch(repportAPI)
            .then(res => res.json())
            .then(data => setRepports(data))
            .catch(err => console.error(err));
    };

    useEffect(() => { fetchAll(); }, []);

    const handleDelete = async (id) => {
        if (!confirm("Supprimer cette réclamation ?")) return;
        await fetch(`${repportAPI}/${id}`, { method: "DELETE" });
        fetchAll();
    };

    const handleEdit = (r) => setEditing({ ...r });

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

    return (
        <div className="segment">
            <h2>Réclamations</h2>

            {editing && (
                <div className="edit-box">
                    <h3>Modifier</h3>
                    <input id="SourceEmail" value={editing.SourceEmail} onChange={handleEditChange} />
                    <input id="Title" value={editing.Title} onChange={handleEditChange} />
                    <textarea id="Description" value={editing.Description} onChange={handleEditChange} />
                    <button onClick={handleUpdate}>Sauvegarder</button>
                    <button onClick={() => setEditing(null)}>Annuler</button>
                </div>
            )}

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
                    {repports.map(r => (
                        <tr key={r.RepportId}>
                            <td>{r.SourceEmail}</td>
                            <td>{r.Title}</td>
                            <td>{r.Description}</td>
                            <td>
                                <button onClick={() => handleEdit(r)}>✏️</button>
                                <button onClick={() => handleDelete(r.RepportId)}>🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllRepports;