
import TopNavAdmin from "../Components/navbarComponent/TopNavAdmin"
import OpsSideBar from "../Components/OperationsPage/opsSideBar"
import AllUsers from "../Components/OperationsPage/allUsers"
import AllPlans from "../Components/OperationsPage/allPlans"
import AllSubbedUsers from "../Components/OperationsPage/allSubbedUsers"
import CreateUser from "../Components/OperationsPage/createUser.jsx"

import { useNavigate } from "react-router-dom"
import { useState , useEffect } from "react"

function CrudPage() {

    const [ currentPage , setCurrentPage ] = useState("users")
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [ loading , setLoading ] = useState(true)
    const navigate = useNavigate()
    const token = localStorage.getItem("generatedJWT_Token")

    useEffect(() => {
        // Check if token exists
        if (!token) {
            navigate("/Authentication")
            return
        }

        try {
            // Decode the JWT token
            const base64Url = token.split('.')[1]
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split('')
                    .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join('')
            )
            const decodedToken = JSON.parse(jsonPayload)

            console.log("Decoded token:", decodedToken) // For debugging

            // Check for the Microsoft schema role claim
            const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
            
            if (userRole === "Admin") {
                setIsAuthorized(true)
            } else {
                // Redirect non-admin users
                alert("Access denied. Admin privileges required.")
                navigate("/") // or navigate("/Unauthorized")
            }
        } catch (error) {
            console.error("Error decoding token:", error)
            navigate("/Authentication")
        } finally {
            setLoading(false)
        }
    }, [])

    return(
    <div className="CrudParent">
        <TopNavAdmin/>
        <div className="containerBox">
            <OpsSideBar onSwitch={setCurrentPage} />
            { currentPage == "users" && <AllUsers/> }
            { currentPage == "plans" && <AllPlans/> }
            { currentPage == "SubbedUsers" && <AllSubbedUsers/> }
            { currentPage == "createUser" && <CreateUser/> }
        </div>
    </div>
)
}

export default CrudPage

