
import TopNavAdmin from "../Components/navbarComponent/TopNavAdmin"
import OpsSideBar from "../Components/OperationsPage/opsSideBar"
import AllUsers from "../Components/OperationsPage/allUsers"
import AllProducts from "../Components/OperationsPage/allProducts"
import AllPlans from "../Components/OperationsPage/allPlans"
import AllSubbedUsers from "../Components/OperationsPage/allSubbedUsers"
import CreateUser from "../Components/OperationsPage/createUser.jsx"

import { useState } from "react"

function CrudPage() {

    const [ currentPage , setCurrentPage ] = useState("users")

    return(
    <div className="CrudParent">
        <TopNavAdmin/>
        <div className="containerBox">
            <OpsSideBar onSwitch={setCurrentPage} />
            { currentPage == "users" && <AllUsers/> }
            { currentPage == "produits" && <AllProducts/> }
            { currentPage == "plans" && <AllPlans/> }
            { currentPage == "SubbedUsers" && <AllSubbedUsers/> }
            { currentPage == "createUser" && <CreateUser/> }
        </div>
    </div>
)
}

export default CrudPage
