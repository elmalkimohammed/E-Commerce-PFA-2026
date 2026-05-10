
import AllPlansRow from "./Inside Components/allPlansRow"

import "../styles/adminMonitoringGlobalStyles.css"

import { useState , useEffect } from "react"
import axios from "axios"
import { subsAPI } from "../../services/servicesAPI"

function AllPlans() {

    const  [ plans , setPlans ] = useState([])
    const [ loading , setLoading ] = useState(false)

    useEffect(() => { 
        fetchPlans()
        setLoading(true)
    }, []);

    const fetchPlans = async () => {
        try {
            setPlans((await axios.get(`${subsAPI}/plans`)).data);
        } catch (error) {
            alert(error.response?.data || "An Internal Error Happened While Trying To Fetch The Plans.....");
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
                    <td>Id Du Plan</td>
                    <td>Nom</td>
                    <td>Prix</td>
                    <td>Duration</td>
                    <td>Produits Maximale</td>
                    <td>Actions</td>
                </tr>
                { plans.map( ( eachPlan ) => {
                    return <AllPlansRow planId={eachPlan.planId} planName={eachPlan.name} planPrice={eachPlan.price}
                    planDuration={eachPlan.duration} planProdMax={eachPlan.maxProducts}/>
                } ) }
            </tbody>
        </table>
    )
}

export default AllPlans
