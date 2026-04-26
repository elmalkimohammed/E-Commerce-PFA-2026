
import AllSubbedRow from "./Inside Components/allSubbedRow"

import "../styles/adminMonitoringGlobalStyles.css"

import { useState , useEffect } from "react"
import axios from "axios"
import { subsAPI } from "../../services/servicesAPI"


function AllSubbedUsers() {

    const  [ subbed , setSubbed ] = useState([])
    const [ loading , setLoading ] = useState(false)

    useEffect(() => { 
        fetchSubbed()
        setLoading(true)
    }, []);

    const fetchSubbed = async () => {
        try {
            setSubbed((await axios.get(`${subsAPI}/getAllSubbedUsers`)).data);
        } catch (error) {
            alert(error.response?.data || "An Internal Error Happened While Trying To Fetch The Subbed Users.....");
        }
    };

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
                    <td>Id D'inscription</td>
                    <td>Id D'utilisateur</td>
                    <td>Id De Plan</td>
                    <td>Date De Fin</td>
                    <td style={ { textTransform: "capitalize" } } >état</td>
                    <td>Plan Choisie</td>
                    <td>Actions</td>
                </tr>
                { subbed.map( (user) => {
                    return <AllSubbedRow subId={user.subId} userId={user.userId} planId={user.planId} endDate={user.endDate}
                    status={user.status} subscriptionPlan={user.planName}/>
                } ) }
            </tbody>
        </table>
    )
}

export default AllSubbedUsers
