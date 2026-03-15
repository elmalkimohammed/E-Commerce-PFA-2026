import TopNav from "../Components/navbarComponent/TopNav"
import HeaderTitle from "../Components/CategoryPage/HeaderTitle"
import ToolBoxFiltering from "../Components/CategoryPage/toolBoxFiltering"
import TipsSection from "../Components/CategoryPage/TipsSection"
import ProductsSection from "../Components/CategoryPage/productsSections"
import "./Styles/categoryPage.css"

import { useState } from "react"

function CategoryPage() {

    const mockData = [
        { name: "Wireless Noise-Cancelling Headphones", category: "Electronics", price: 79.99 },
        { name: "Running Shoes Pro X", category: "Sports", price: 59.99 },
        { name: "Smart Coffee Maker", category: "Home & Garden", price: 49.99 },
        { name: "The Art of Clean Code", category: "Books", price: 24.99 },
        { name: "Mechanical Keyboard TKL", category: "Electronics", price: 129.99 }
    ]

    const [ buttonState , setButtonState ] = useState(false)
    const [ selectedCateg , setSelectedCateg ] = useState("")
    const [ selectedPrice , setSelectedPrice ] = useState("")
    const [ filteredProducts , setFilteredProducts ] = useState([])

    return(
        <>
            <TopNav/>
            <div className="filterContainer">
                <HeaderTitle/>
                <ToolBoxFiltering buttonState={ setButtonState } setCategory={ setSelectedCateg } setPrice={ setSelectedPrice }/>
                { !buttonState && <TipsSection/> }
                { buttonState && <ProductsSection buttonState={ setButtonState } productsList={ mockData } desiredCategory={ selectedCateg } desiredPrice={ selectedPrice }/> }
            </div>
        </>
    )
}

export default CategoryPage
