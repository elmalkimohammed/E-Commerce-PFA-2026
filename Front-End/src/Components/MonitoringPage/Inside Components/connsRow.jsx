
function ConnRow( { userId , Email , FirstName , LastName , Phone , Address , Sex , DateOfBirth , ProfileImage } ) {
    return(
        <tr>
            <td>{ userId }</td>
            <td>{ Email }</td>
            <td>{ FirstName }</td>
            <td>{ LastName }</td>
            <td>{ Phone }</td>
            <td>{ Address }</td>
            <td>{ Sex }</td>
            <td>{ DateOfBirth }</td>
            <td>{ ProfileImage }</td>
        </tr>
    )
}

export default ConnRow
