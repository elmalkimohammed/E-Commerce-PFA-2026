import TopNav from "../Components/navbarComponent/TopNav"
import HeaderTitle from "../Components/CategoryPage/HeaderTitle"

import "./Styles/categoryPage.css"

function CategoryPage() {
    return(
        <>
            <TopNav/>
            <div className="filterContainer">
                <HeaderTitle/>
            </div>
        </>
    )
}

export default CategoryPage
