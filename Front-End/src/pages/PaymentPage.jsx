import PaymentForm from "../Components/Payment Form/PaymentForm"
import TopNav from "../Components/navbarComponent/TopNav"

import "./Styles/PaymentPage.css"


function PaymentPage() {
    return(
        <>
            <TopNav/>
            <div className="payFormContainer">
                <PaymentForm/>
            </div>
        </>
    )
}

export default PaymentPage
