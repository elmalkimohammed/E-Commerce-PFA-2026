
import ConnRow from "./Inside Components/connsRow"

import "../styles/adminMonitoringGlobalStyles.css"

import { useState , useEffect } from "react"
import axios from "axios"
import { authAPI } from "../../services/servicesAPI"

function ConnectedUsers() {

    const [ usersFullInfos , setUsersFullInfos ] = useState([])
    const [ loading , setLoading ] = useState(false)

    useEffect( () => {
        fetchAllInfos()
        setLoading(true)
    }, [] )

    /* Recovering The JWT As It's Needed To Clear The Cart From Items */
    const token = localStorage.getItem("generatedJWT_Token")
    if ( !token ) navigate("/Authentication")
    /* Declaring The Constant Responsible For The Config */ 
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }

    const fetchAllInfos = async () => {
        try {
            const response = await axios.get("http://localhost/api/UserProfile/fetchALLFullUsrsInfos", config)
            setUsersFullInfos( response.data )            
        } catch (error) {
            alert(error.response?.data || "An Internal Error Happened While Trying To Fetch The Infos For All The Users.....");
        }
    }

    if ( !loading ) {
        return(
            <>
                <div>Loading.........</div>
            </>
        )
    }

    return(
        <table className="MonitoringGlobalStyles">
            <tbody>
                <tr>
                    <td>Id D'utilisateur</td>
                    <td>Email</td>
                    <td>Nom</td>
                    <td>Prenom</td>
                    <td>Téléphone</td>
                    <td>Addresse</td>
                    <td>Gendre</td>
                    <td>Date De Naissance</td>
                    <td>Image De Profile</td>
                </tr>
                { usersFullInfos.map( ( user ) => {
                    return <ConnRow userId={user.userId} Email={user.email} FirstName={user.firstName}
                    LastName={user.lastName} Phone={user.phone} Address={user.address} Sex={user.sex}
                    DateOfBirth={user.dateOfBirth} ProfileImage={user.profileImage}/>
                } ) }
            </tbody>
        </table>
    )
}

export default ConnectedUsers
