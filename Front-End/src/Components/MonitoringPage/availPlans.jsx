
import PlansRow from "./Inside Components/plansRow"

import "../styles/adminMonitoringGlobalStyles.css"

function AvailPlans() {
    return(
        <table className="MonitoringGlobalStyles">
            <tbody>
                <tr>
                    <td>Id Du Plan</td>
                    <td>Nom</td>
                    <td>Prix</td>
                    <td>Duration</td>
                    <td>Produits Maximale</td>
                </tr>
                <PlansRow planId={1} planName={"basic"} planPrice={"24.99"}
                    planDuration={"30days"} planProdMax={50}
                />
                <PlansRow planId={2} planName={"premium"} planPrice={"49.99"}
                    planDuration={"60days"} planProdMax={100}
                />
                <PlansRow planId={3} planName={"entreprise"} planPrice={"90.99"}
                    planDuration={"90days"} planProdMax={1000}
                />
            </tbody>
        </table>
    )
}

export default AvailPlans
