import axios from "axios"
import UsersRow from "./Inside Components/usersRow"

import { useState , useEffect } from "react"

import "../styles/adminMonitoringGlobalStyles.css"

function CreatedUsers() {

    const [ userLogs , setUserLogs ] = useState([])
    const [ loading , setLoading ] = useState(false)

    useEffect( () => {
        fetchUserLogs()
        setLoading(true)
    }, [] )

    const fetchUserLogs = async () => {
        const response = await axios.get("http://localhost:5008/api/audit/users")
        const usersArray = Object.values(response.data)
        setUserLogs( usersArray )
    }

    if ( !loading ) {
        return(
            <div>
                Loading.....
            </div>
        )
    }

    return(
        <table className="MonitoringGlobalStyles">
            <tbody>
                <tr>
                    <td>Id D'utilisateur</td>
                    <td>Email</td>
                    <td>Role</td>
                    <td>Date Du Création</td>
                    <td>Statue</td>
                </tr>
                { userLogs[3] ? userLogs[3].map( ( user ) => {
                    return <UsersRow userId={user.userId} email={user.email} role={user.role} creationDate={user.createdAt} status={user.status} />
                } ) : <tr><td colSpan="5">Nothing to show</td></tr> }
            </tbody>
        </table>
    )
}

export default CreatedUsers
