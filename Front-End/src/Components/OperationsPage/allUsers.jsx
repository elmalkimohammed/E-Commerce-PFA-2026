
import AllUsersRow from "./Inside Components/allUsersRow"

import "../styles/adminMonitoringGlobalStyles.css"

function AllUsers() {
    return(
        <table className="MonitoringGlobalStyles">
            <tbody>
                <tr>
                    <td>Id D'utilisateur</td>
                    <td>Email</td>
                    <td>Nom</td>
                    <td>Prenom</td>
                    <td>Téléphone</td>
                    <td>Addresse</td>
                    <td>Gendre</td>
                    <td>Date De Naissance</td>
                    <td>Image De Profile</td>
                    <td>Actions</td>
                </tr>
                <AllUsersRow userId={1} Email={"elmalki@gmail.com"} FirstName={"elmalki"}
                    LastName={"mohammed"} Phone={"0678452169"} Address={"Hay Al Fath"} Sex={"Homme"}
                    DateOfBirth={"15-02-2005"} ProfileImage={"image/test.jpg"}/>
                <AllUsersRow userId={1} Email={"elmalki@gmail.com"} FirstName={"elmalki"}
                    LastName={"mohammed"} Phone={"0678452169"} Address={"Hay Al Fath"} Sex={"Homme"}
                    DateOfBirth={"15-02-2005"} ProfileImage={"image/test.jpg"}/>
                <AllUsersRow userId={1} Email={"elmalki@gmail.com"} FirstName={"elmalki"}
                    LastName={"mohammed"} Phone={"0678452169"} Address={"Hay Al Fath"} Sex={"Homme"}
                    DateOfBirth={"15-02-2005"} ProfileImage={"image/test.jpg"}/>
            </tbody>
        </table>
    )
}

export default AllUsers
