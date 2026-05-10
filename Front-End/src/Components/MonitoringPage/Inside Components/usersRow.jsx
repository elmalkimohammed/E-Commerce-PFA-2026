
function UsersRow( { userId , email , role , creationDate , status } ) {
    return(
        <tr>
            <td>{ userId }</td>
            <td>{ email }</td>
            <td>{ role }</td>
            <td>{ creationDate }</td>
            <td>{ status }</td>
        </tr>
    )
}

export default UsersRow
