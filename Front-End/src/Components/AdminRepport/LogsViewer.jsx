import { useEffect, useState } from "react";
import { repportAPI } from "../../services/servicesAPI";
import "../styles/Repport.css";

function LogsViewer() {
    const [logs, setLogs] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${repportAPI}/logs`)
            .then(res => res.text())
            .then(data => { setLogs(data); setLoading(false); })
            .catch(() => { setLogs("Erreur lors du chargement des logs."); setLoading(false); });
    }, []);

    return (
        <div className="repport-card">
            <div className="card-header">
                <h2>Logs</h2>
                <p>Journal des réclamations</p>
            </div>
            <div className="logs-body">
                {loading
                    ? <p className="logs-loading">Chargement...</p>
                    : <pre className="logs-pre">{logs}</pre>
                }
            </div>
        </div>
    );
}

export default LogsViewer;