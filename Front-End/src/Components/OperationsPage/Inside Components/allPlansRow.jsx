


function AllPlansRow( { planId , planName , planPrice , planDuration , planProdMax } ) {
    return(
        <tr>
            <td>{ planId }</td>
            <td>{ planName }</td>
            <td>{ planPrice }</td>
            <td>{ planDuration }</td>
            <td>{ planProdMax }</td>
            <td> <button className="acionsBtn">Edit</button> <button className="acionsBtn">Delete</button> </td>
        </tr>
    )
}

export default AllPlansRow
