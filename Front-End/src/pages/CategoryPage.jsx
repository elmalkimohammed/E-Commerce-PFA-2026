import TopNav from "../Components/navbarComponent/TopNav"
import HeaderTitle from "../Components/CategoryPage/HeaderTitle"
import ToolBoxFiltering from "../Components/CategoryPage/toolBoxFiltering"

import "./Styles/categoryPage.css"

function CategoryPage() {
    return(
        <>
            <TopNav/>
            <div className="filterContainer">
                <HeaderTitle/>
                <ToolBoxFiltering/>
            </div>
        </>
    )
}

export default CategoryPage
