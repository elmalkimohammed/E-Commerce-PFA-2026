import "../styles/tipsSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

function TipsSection() {

    /* Show The Tips Component First Before Starting The Filter Process */
        return(
        <div className="dispSection">
            <h1 style={{ color: "black", textAlign: "start", padding: "20px" }}>Produits</h1>
            <section style={{ backgroundColor: "#fff", borderBottomRightRadius: "12px", borderBottomLeftRadius: "12px"}}>
                <FontAwesomeIcon icon={faCircleExclamation} 
                style={{ padding: "20px", 
                    fontSize: "30px", 
                    borderRadius: "12px",  
                    color: "#dc2626", 
                    backgroundColor: "#000",
                    alignSelf: "center"
                }}
                />
                <h1 style={{ color: "black" }}>Aucun filtre appliqué</h1>
                <p>Utilisez la barre de filtres ci-dessus pour afficher les produits</p>
                <table>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Choisissez une catégorie dans le menu déroulant</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sélectionnez une fourchette de prix</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Cliquez sur <span style={{ fontWeight: "bolder", color: "black" }}>Appliquer</span> pour voir les résultats</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <footer></footer>
        </div>
    )
}

export default TipsSection
