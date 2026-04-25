import { useEffect, useState } from "react";
import { repportAPI } from "../../services/servicesAPI";

function RecentRepports() {
    const [repports, setRepports] = useState([]);

    useEffect(() => {
        fetch(`${repportAPI}/recent`)
            .then(res => res.json())
            .then(data => setRepports(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="segment">
            <h2>Réclamations Créées</h2>
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
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>
                                Aucune réclamation récente
                            </td>
                        </tr>
                    ) : (
                        repports.map(r => (
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
    );
}

export default RecentRepports;