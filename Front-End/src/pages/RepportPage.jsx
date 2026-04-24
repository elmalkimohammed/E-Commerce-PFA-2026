import RepportForm from "../Components/RepportComponents/RepportForm";
import TopNav from "../Components/navbarComponent/TopNav";
import "./Styles/RepportPage.css";

function RepportPage() {
    return (
        <>
            <TopNav />
            <div className="report-container">
                <h1 className="report-title">Report a Problem</h1>
                <RepportForm />
            </div>
        </>
    );
}
export default RepportPage;
