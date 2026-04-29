import "../styles/RepportForm.css";
import { repportAPI } from "../../services/servicesAPI";
import { useState } from "react";

function RepportForm({ userID, onSubmitSuccess, onError }) {
    const [form, setForm] = useState({
        SourceEmail: "",
        Title: "",
        Description: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(repportAPI, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, UserID: userID })
            });

            if (!res.ok) throw new Error(`Erreur ${res.status}`);

            setForm({ SourceEmail: "", Title: "", Description: "" });
            onSubmitSuccess?.();
        } catch (err) {
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
                placeholder="votre@email.com"
                value={form.SourceEmail}
                onChange={handleChange}
                required
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