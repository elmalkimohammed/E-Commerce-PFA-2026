
import PlansRow from "./Inside Components/plansRow"

import "../styles/adminMonitoringGlobalStyles.css"

import { useState , useEffect } from "react"
import axios from "axios"
import { subsAPI } from "../../services/servicesAPI"

function AvailPlans() {

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
                </tr>

                { plans.map( ( eachPlan ) => {
                    return <PlansRow planId={eachPlan.planId} planName={eachPlan.name} planPrice={eachPlan.price}
                    planDuration={eachPlan.duration} planProdMax={eachPlan.maxProducts}/>
                } ) }
            </tbody>
        </table>
    )
}

export default AvailPlans
