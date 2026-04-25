import "../styles/RepportForm.css";
import { repportAPI } from "../../services/servicesAPI";
import { useState } from "react";

function RepportForm({ userID, onSubmitSuccess }) {
    const [form, setForm] = useState({
        SourceEmail: "",
        Title: "",
        Description: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(repportAPI, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, UserID: userID })
            });
            alert("Réclamation envoyée avec succès");
            setForm({ SourceEmail: "", Title: "", Description: "" });
            onSubmitSuccess();
        } catch (err) {
            alert("Erreur lors de l'envoi");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="SourceEmail">Email:</label>
            <input
                type="email"
                id="SourceEmail"
                placeholder="Email"
                value={form.SourceEmail}
                onChange={handleChange}
                required
            />
            <label htmlFor="Title">Titre:</label>
            <input
                type="text"
                id="Title"
                placeholder="Titre"
                value={form.Title}
                onChange={handleChange}
                required
            />
            <label htmlFor="Description">Description:</label>
            <textarea
                id="Description"
                placeholder="Description"
                value={form.Description}
                onChange={handleChange}
                required
            />
            <button type="submit">Soumettre</button>
        </form>
    );
}

export default RepportForm;