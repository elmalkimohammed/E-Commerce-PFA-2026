
function CmdsRow( { userId , commandeId , productsIds } ) {
    return(
        <tr>
            <td>{ userId }</td>
            <td>{ commandeId }</td>
            <td>{ productsIds }</td>
        </tr>
    )
}

export default CmdsRow
