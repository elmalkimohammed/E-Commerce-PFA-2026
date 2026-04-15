
import AllSubbedRow from "./Inside Components/allSubbedRow"

import "../styles/adminMonitoringGlobalStyles.css"


function AllSubbedUsers() {
    return(
        <table className="MonitoringGlobalStyles">
            <tbody>
                <tr>
                    <td>Id D'inscription</td>
                    <td>Id D'utilisateur</td>
                    <td>Id De Plan</td>
                    <td>Date De Fin</td>
                    <td style={ { textTransform: "capitalize" } } >état</td>
                    <td>Plan Choisie</td>
                    <td>Actions</td>
                </tr>
                <AllSubbedRow subId={1} userId={1} planId={2} endDate={"15-09-2024"}
                    status={"Cancelled"} subscriptionPlan={"Premium"}
                />
                <AllSubbedRow subId={1} userId={1} planId={2} endDate={"15-09-2024"}
                    status={"Cancelled"} subscriptionPlan={"Premium"}
                />
                <AllSubbedRow subId={1} userId={1} planId={2} endDate={"15-09-2024"}
                    status={"Cancelled"} subscriptionPlan={"Premium"}
                />
            </tbody>
        </table>
    )
}

export default AllSubbedUsers
