import { subsAPI } from "../../../services/servicesAPI"
import { useEffect } from "react"
import axios from "axios"

function AllSubbedRow( { subId , userId , planId , endDate , status , subscriptionPlan } ) {

    const deleteSub = async () => {
        if ( confirm("Est ce que tu est sure?") == true )
        {
            await axios.delete(`${subsAPI}/deleteSubscription/${subId}`)
        }
    }

    return(
        <tr>
            <td>{ subId }</td>
            <td>{ userId }</td>
            <td>{ planId }</td>
            <td>{ endDate }</td>
            <td>{ status }</td>
            <td>{ subscriptionPlan }</td>
            <td> <button className="acionsBtn" onClick={deleteSub}>Delete</button> </td>
        </tr>
    )
}

export default AllSubbedRow
