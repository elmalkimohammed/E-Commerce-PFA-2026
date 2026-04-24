
import SubbedUsersRow from "./Inside Components/subbedUsersRow"
import "../styles/adminMonitoringGlobalStyles.css"

function SubbedUsers() {
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
                </tr>
                <SubbedUsersRow subId={1} userId={1} planId={2} endDate={"15-09-2024"}
                    status={"Cancelled"} subscriptionPlan={"Premium"}
                />
                <SubbedUsersRow subId={1} userId={1} planId={2} endDate={"15-09-2024"}
                    status={"Cancelled"} subscriptionPlan={"Premium"}
                />
                <SubbedUsersRow subId={1} userId={1} planId={2} endDate={"15-09-2024"}
                    status={"Cancelled"} subscriptionPlan={"Premium"}
                />
            </tbody>
        </table>
    )
}

export default SubbedUsers
