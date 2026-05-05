import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import TopNavAdmin from "../Components/navbarComponent/TopNavAdmin"
import MonitSideBar from "../Components/MonitoringPage/monitSideBar"
import AvailPlans from "../Components/MonitoringPage/availPlans"
import ConnectedUsers from "../Components/MonitoringPage/connectedUsers"
import CreatedUsers from "../Components/MonitoringPage/createdUsers"
import SubbedUsers from "../Components/MonitoringPage/subedUsers"

import "./Styles/MonitoringPage.css"

function MonitoringPage() {

    const navigate = useNavigate()
    const token = localStorage.getItem("generatedJWT_Token")
    const [ currentPage , setCurrentPage ] = useState("createdUsers")
    const [ loading , setLoading ] = useState(true)
    const [isAuthorized, setIsAuthorized] = useState(false)

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
    <div className="MonitoringParent">
        <TopNavAdmin/>
        <div className="containerBox">
            <MonitSideBar onSwitch={setCurrentPage} />
            { currentPage == "plans" && <AvailPlans/> }
            { currentPage == "connUsers" && <ConnectedUsers/> }
            { currentPage == "createdUsers" && <CreatedUsers/> }
            { currentPage == "SubbedUsers" && <SubbedUsers/> }
        </div>
    </div>
    )
}

export default MonitoringPage

