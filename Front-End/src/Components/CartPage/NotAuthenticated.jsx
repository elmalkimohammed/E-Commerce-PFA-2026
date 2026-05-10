import { useNavigate } from "react-router-dom"

function NotAuthenticated() {

    const navigate = useNavigate()

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
            gap: "1.5em",
            textAlign: "center"
        }}>
            <h2 style={{ color: "#dc2626" }}>🔒 Accès Refusé</h2>
            <p style={{ fontSize: "1.2rem" }}>
                Vous devez être connecté pour accéder au panier.
            </p>
            <button
                onClick={() => navigate("/Authentication")}
                style={{
                    padding: "0.8em 2em",
                    backgroundColor: "#000",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    cursor: "pointer"
                }}
            >
                Se Connecter
            </button>
        </div>
    )
}

export default NotAuthenticated