


function AllPlansRow( { planId , planName , planPrice , planDuration , planProdMax } ) {
    return(
        <tr>
            <td>{ planId }</td>
            <td>{ planName }</td>
            <td>{ planPrice }</td>
            <td>{ planDuration }</td>
            <td>{ planProdMax }</td>
            <td> <button>Edit</button> <button>Delete</button> </td>
        </tr>
    )
}

export default AllPlansRow
