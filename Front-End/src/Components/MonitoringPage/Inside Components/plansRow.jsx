
function PlansRow( { planId , planName , planPrice , planDuration , planProdMax } ) {
    return(
        <tr>
            <td>{ planId }</td>
            <td>{ planName }</td>
            <td>{ planPrice }</td>
            <td>{ planDuration }</td>
            <td>{ planProdMax }</td>
        </tr>
    )
}

export default PlansRow
