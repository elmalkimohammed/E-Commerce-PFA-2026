


function AllProductsRow( { productId , productName , productDesc , productPrice , productStock , productAttbs , productCategory , productUserId , productImages } ) {
    return(
        <tr>
            <td>{ productId }</td>
            <td>{ productName }</td>
            <td>{ productDesc }</td>
            <td>{ productPrice }</td>
            <td>{ productStock }</td>
            <td>{ productAttbs }</td>
            <td>{ productCategory }</td>
            <td>{ productUserId }</td>
            <td>{ productImages }</td>
            <td> <button>Edit</button> <button>Delete</button> </td>
        </tr>
    )
}

export default AllProductsRow
