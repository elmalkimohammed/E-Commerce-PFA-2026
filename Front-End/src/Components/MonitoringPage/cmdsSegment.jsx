
import CmdsRow from "./Inside Components/cmdsRow"

import "../styles/adminMonitoringGlobalStyles.css"

function CmdsSegment() {
    return(
        <table className="MonitoringGlobalStyles">
            <tbody>
                <tr>
                    <td>Id D'utilisateur</td>
                    <td>Id Du Commande</td>
                    <td>Id Du Produits</td>
                </tr>
                <CmdsRow userId={1} commandeId={1} productsIds={15} />
                <CmdsRow userId={2} commandeId={2} productsIds={"15 , 16"} />
                <CmdsRow userId={3} commandeId={3} productsIds={"12 , 20 , 100"} />
            </tbody>
        </table>
    )
}

export default CmdsSegment
