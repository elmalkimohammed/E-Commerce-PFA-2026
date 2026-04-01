import TopNav from "../Components/navbarComponent/TopNav"
import HeaderTitle from "../Components/CategoryPage/HeaderTitle"
import ToolBoxFiltering from "../Components/CategoryPage/ToolBoxFiltering"
import TipsSection from "../Components/CategoryPage/TipsSection"
import ProductsSection from "../Components/CategoryPage/ProductsSections"
import "./Styles/categoryPage.css"
import { prodAPI } from "../services/servicesAPI"

import { useState , useEffect } from "react"

function CategoryPage() {

    const [products, setProducts] = useState([])
    const [buttonState , setButtonState ] = useState(false)
    const [selectedCateg , setSelectedCateg ] = useState("All")
    const [selectedPrice , setSelectedPrice ] = useState("0")

    useEffect(() => {

    fetch(`${prodAPI}`)
        .then(res => res.json())
        .then(data => {
            console.log("API DATA:", data)
            setProducts(data)
        })
        .catch(err => console.error(err))

    }, [])

    useEffect( () => {
        const handleNavCategory = () => {
            const savedCategory = localStorage.getItem("selectedCategory")
            if ( savedCategory && savedCategory.length > 1 ) {
                localStorage.removeItem("selectedCategory")
                setSelectedCateg(savedCategory)
                setButtonState(true)
            }
        }
        window.addEventListener("categoryChanged", handleNavCategory)
        return () => {
            window.removeEventListener("categoryChanged", handleNavCategory)
        }
    }, [] )

    return(
        <>
            <TopNav/>

            <div className="filterContainer">

                <HeaderTitle/>

                <ToolBoxFiltering
                    buttonState={setButtonState}
                    setCategory={setSelectedCateg}
                    setPrice={setSelectedPrice}
                />

                {!buttonState && <TipsSection/>}

                {buttonState &&
                    <ProductsSection
                        productsList={products}
                        desiredCategory={selectedCateg}
                        desiredPrice={selectedPrice}
                    />
                }

            </div>
        </>
    )
}

export default CategoryPage