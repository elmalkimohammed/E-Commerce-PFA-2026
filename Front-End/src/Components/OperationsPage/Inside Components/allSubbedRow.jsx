


function AllSubbedRow( { subId , userId , planId , endDate , status , subscriptionPlan } ) {
    return(
        <tr>
            <td>{ subId }</td>
            <td>{ userId }</td>
            <td>{ planId }</td>
            <td>{ endDate }</td>
            <td>{ status }</td>
            <td>{ subscriptionPlan }</td>
            <td> <button className="acionsBtn">Edit</button> <button className="acionsBtn">Delete</button> </td>
        </tr>
    )
}

export default AllSubbedRow
