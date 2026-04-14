
import UsersRow from "./Inside Components/usersRow"

import "../styles/adminMonitoringGlobalStyles.css"

function CreatedUsers() {
    return(
        <table className="MonitoringGlobalStyles">
            <tbody>
                <tr>
                    <td>Id D'utilisateur</td>
                    <td>Email</td>
                    <td>Mot De Pass</td>
                    <td>Date Du Création</td>
                </tr>
                <UsersRow userId={1} email={"elmalki@gmail.com"} password={"test123"} creationDate={"15-02-2025"} />
                <UsersRow userId={2} email={"mohammed@gmail.com"} password={"test456"} creationDate={"02-04-2026"} />
                <UsersRow userId={3} email={"amine@gmail.com"} password={"test789"} creationDate={"9-12-2010"} />
            </tbody>
        </table>
    )
}

export default CreatedUsers
