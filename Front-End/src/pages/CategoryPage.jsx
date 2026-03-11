import TopNav from "../Components/navbarComponent/TopNav"
import HeaderTitle from "../Components/CategoryPage/HeaderTitle"
import ToolBoxFiltering from "../Components/CategoryPage/toolBoxFiltering"
import DisplaySection from "../Components/CategoryPage/DisplaySection"

import "./Styles/categoryPage.css"

function CategoryPage() {
    return(
        <>
            <TopNav/>
            <div className="filterContainer">
                <HeaderTitle/>
                <ToolBoxFiltering/>
                <DisplaySection/>
            </div>
        </>
    )
}

export default CategoryPage
