import ProductBox from "../Components/CartPage/ProductBox"
import CommandDesc from "../Components/CartPage/CommandDesc"
import TopNav from "../Components/navbarComponent/TopNav"
import "./Styles/CartPage.css"

import { prodAPI } from "../services/servicesAPI"
import { useState , useEffect } from "react"

import axios from "axios"

function CartPage() {

    /* Data Simulation */

    const [ product , setProduct ] = useState(null)
    const [ loading , setLoading ] = useState(true)

    useEffect( () => {
        axios.get(`${ prodAPI }`).then(
            (response) => { 
                console.log(response.data[0])
                setProduct(response.data[0])
                setLoading(false)
            }
        )
    }, [] )

    if( loading ) {
        return(
            <div>loading.....</div>
        )
    }

    return(
        <>
            <TopNav/>
            <div className="entireContainer">
                <h1>Votre pannier</h1>
                <div className="cartContainer">
                    <div className="cartItems" style={ { display: "flex", flexDirection: "column", gap: "1em" } }>
                        <ProductBox productMimeType={product.mimetype} productImage={product.image} productDescription={ product.description } productName={product.name} productPrice={product.price} productMaxStock={product.stock}/>
                        <ProductBox productMimeType={product.mimetype} productImage={product.image} productDescription={ product.description } productName={product.name} productPrice={product.price} productMaxStock={product.stock}/>
                        <ProductBox productMimeType={product.mimetype} productImage={product.image} productDescription={ product.description } productName={product.name} productPrice={product.price} productMaxStock={product.stock}/>
                        <ProductBox productMimeType={product.mimetype} productImage={product.image} productDescription={ product.description } productName={product.name} productPrice={product.price} productMaxStock={product.stock}/>
                    </div>
                    <CommandDesc/>
                </div>
            </div>
        </>
    )
}

export default CartPage
