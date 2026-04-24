
import "../styles/globalAuthForm.css"

function CreateUser() {
    return(
        <div className="containerBox"  style={{ width:"fit-content",  height:"fit-content"}}>
            <form style={{ display: "flex", flexDirection: "column" }}>
                <div className="inputsSenderBox" style={{ display: "flex", flexDirection: "row", gap: "3em" }}>
                    <div className="privateInfos">
                        <h1 className="header" style={{ borderRadius: "12px" }}>Confidential Informations</h1>
                        <label htmlFor="emailInput">Email: </label>
                        <input type="email"id="emailInput" required/>
                        <label htmlFor="passwInput">Password: </label>
                        <input type="password"id="passwInput" required/>
                        <label htmlFor="roleInput" >Role: </label>
                        <input type="text"id="roleInput" required/>
                    </div>
                    <div className="publicInfos">
                        <h1 className="header" style={{ borderRadius: "12px" }}>Public Informations</h1>
                        <label htmlFor="fstNameInput">Premiere Nom: </label>
                        <input type="text"id="fstNameInput" />
                        <label htmlFor="secNameInput">Dèrnière Nom: </label>
                        <input type="text"id="secNameInput" />
                        <label htmlFor="phoneInput">Téléphone: </label>
                        <input type="number"id="phoneInput" />
                        <label htmlFor="addrInput">Addresse: </label>
                        <input type="text"id="addrInput" />
                        <label htmlFor="sexInput">Gendre: </label>
                        <select id="sexInput" style={{ borderStyle: "none", padding: "10px", width: "100%", borderRadius: "12px", border: "#e2e8f0 solid 2px" }}>
                            <option value="Homme">Homme</option>
                            <option value="Femme">Femme</option>
                        </select>
                        <label htmlFor="dOfBInput">Date De Naissance: </label>
                        <input type="date" id="dOfBInput" />
                    </div>
                </div>
                { /* Départ Du Traitement d'image */ }
                { /* Fin Du Traitement d'image */ }
                <input type="submit" value="Creer" />
            </form>
        </div>
        
    )
}

export default CreateUser
