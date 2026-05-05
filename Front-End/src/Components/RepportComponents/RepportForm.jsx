import "../styles/RepportForm.css";
import { repportAPI, userAPI } from "../../services/servicesAPI";
import { useState, useEffect } from "react";

function RepportForm({ userID, onSubmitSuccess, onError }) {
    const [form, setForm] = useState({ SourceEmail: "", Title: "", Description: "" });
    const [loading, setLoading] = useState(false);

    const jwtToken = localStorage.getItem("generatedJWT_Token");

    useEffect(() => {
        fetch(`${userAPI}/`, {
            headers: { Authorization: `Bearer ${jwtToken}` }
        })
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error ${res.status}`);
                return res.json();
            })
            .then(data => setForm(prev => ({ ...prev, SourceEmail: data.email ?? "" })))
            .catch(err => console.error("Failed to fetch user email:", err));
    }, []);

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${repportAPI}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, UserID: userID })
            });
            if (!res.ok) throw new Error(`Erreur ${res.status}`);
            setForm(prev => ({ ...prev, Title: "", Description: "" }));
            onSubmitSuccess?.();
        } catch {
            onError?.();
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="SourceEmail">Email</label>
            <input
                type="email"
                id="SourceEmail"
                value={form.SourceEmail}
                readOnly
            />

            <label htmlFor="Title">Titre</label>
            <input
                type="text"
                id="Title"
                placeholder="Objet de votre réclamation"
                value={form.Title}
                onChange={handleChange}
                required
            />

            <label htmlFor="Description">Description</label>
            <textarea
                id="Description"
                placeholder="Décrivez votre réclamation en détail..."
                value={form.Description}
                onChange={handleChange}
                required
            />

            <button type="submit" disabled={loading}>
                {loading ? "Envoi en cours..." : "Soumettre"}
            </button>
        </form>
    );
}

export default RepportForm;