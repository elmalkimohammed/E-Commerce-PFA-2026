
function UsersRow( { userId , email , password , creationDate } ) {
    return(
        <tr>
            <td>{ userId }</td>
            <td>{ email }</td>
            <td>{ password }</td>
            <td>{ creationDate }</td>
        </tr>
    )
}

export default UsersRow
