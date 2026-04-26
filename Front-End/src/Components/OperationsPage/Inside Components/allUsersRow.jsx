import { useEffect , useState } from "react";
import axios from "axios";
import { authAPI } from "../../../services/servicesAPI";

function AllUsersRow( { userId , Email , FirstName , LastName , Phone , Address , Sex , DateOfBirth , ProfileImage , Password } ) {
    
    const shortPassword = Password ? Password.substring(0, 15) + '...' : '';

    const deleteUser = async () => {
        try {
            const response = await axios.delete(`http://localhost:5001/api/auth/deleteUser/${userId}`)
        } catch (error) {
            alert(error.response?.data || "An Internal Error Happened While Trying To Delete The User.....");
        }
    }

    return(
        <tr>
            <td>{ userId }</td>
            <td>{ Email }</td>
            <td title={Password}>{ shortPassword }</td>
            <td>{ FirstName }</td>
            <td>{ LastName }</td>
            <td>{ Phone }</td>
            <td>{ Address }</td>
            <td>{ Sex }</td>
            <td>{ DateOfBirth }</td>
            <td>{ ProfileImage }</td>
            <td> <button className="acionsBtn">Edit</button> <button className="acionsBtn" onClick={deleteUser}>Delete</button> </td>
        </tr>
    )
}

export default AllUsersRow
