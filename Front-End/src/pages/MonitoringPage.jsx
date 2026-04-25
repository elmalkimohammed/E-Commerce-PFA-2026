
import { useState } from "react"

import TopNavAdmin from "../Components/navbarComponent/TopNavAdmin"
import MonitSideBar from "../Components/MonitoringPage/monitSideBar"
import AvailPlans from "../Components/MonitoringPage/availPlans"
import ConnectedUsers from "../Components/MonitoringPage/connectedUsers"
import CreatedUsers from "../Components/MonitoringPage/createdUsers"
import SubbedUsers from "../Components/MonitoringPage/subedUsers"

import "./Styles/MonitoringPage.css"

function MonitoringPage() {

    const [ currentPage , setCurrentPage ] = useState("createdUsers")

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
