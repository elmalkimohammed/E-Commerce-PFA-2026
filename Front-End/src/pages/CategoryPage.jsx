import TopNav from "../Components/navbarComponent/TopNav"
import HeaderTitle from "../Components/CategoryPage/HeaderTitle"
import ToolBoxFiltering from "../Components/CategoryPage/toolBoxFiltering"
import TipsSection from "../Components/CategoryPage/TipsSection"
import ProductsSection from "../Components/CategoryPage/productsSections"
import "./Styles/categoryPage.css"

import { useState } from "react"

function CategoryPage() {

    const [ buttonState , setButtonState ] = useState(false)

    return(
        <>
            <TopNav/>
            <div className="filterContainer">
                <HeaderTitle/>
                <ToolBoxFiltering buttonState={ setButtonState }/>
                { !buttonState && <TipsSection/> }
                { buttonState && <ProductsSection buttonState={ setButtonState }/> }
            </div>
        </>
    )
}

export default CategoryPage
