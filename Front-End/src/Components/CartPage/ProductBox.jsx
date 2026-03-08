import { useState, useEffect } from "react"
import { cartAPI } from "../../services/servicesAPI"
import axios from "axios"

import "../styles/ProductBox.css"

function ProductBox( { productId , productMimeType , productImage , productName , productDescription , productPrice , productMaxStock, onQuantityChange } ) {
    
    const imgSrc = `data:${ productMimeType };base64,${ productImage }`

    /* Recovering The JWT As It's Needed To Clear The Cart From Items */
        const token = localStorage.getItem("generatedJWT_Token")
        if ( !token ) navigate("/Authentication")
        /* Declaring The Constant Responsible For The Config */ 
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }

    const [ stockCounter , setStockCounter ] = useState(0)

    // Follows The Quantity Counter Change And Pass It As A Props To Be Treated Via The Parent Component
    useEffect(() => {
        if (onQuantityChange) {
            onQuantityChange(productId, stockCounter);
        }
    }, [stockCounter, productId, onQuantityChange]);

    const stockAddition = async () => {
        if ( stockCounter < productMaxStock ) {
            setStockCounter(stockCounter + 1)
        }
    }

    const stockSubstraction = async () => {
        if ( stockCounter > 0 ) {
            setStockCounter(stockCounter-1)
        }
    }

    const deleteItem = async () => {
        await axios.delete(`${cartAPI}/deleteItem/${productId}`, config)
        /* Forcefully Reload The Page To Display The New Changes */
        window.location.reload()
    }

    return(
        <div className="prodBoxContainer" style={ { height: "fit-content" } }>
            <div className="leftSide">
                <div className="imageProd">
                    <img src={ imgSrc } alt="Product's Image" />
                </div>
                <div className="description">
                    <h1>{ productName }</h1>
                    <h2>{ productDescription }</h2>
                    <h3>{ productPrice }$</h3>
                </div>
            </div>
            <div className="rightSide">
                <div className="stockControl">
                    <button className="subs" onClick={ stockSubstraction }>-</button>
                    <p>{ stockCounter }</p>
                    <button className="add" onClick={ stockAddition }>+</button>
                </div>
                <button onClick={ deleteItem } style={ { background: "transparent", borderStyle: "none", border: "1px solid black", fontWeight: "bolder", width: "fit-content", alignSelf: "flex-end", padding: "10px", borderRadius: "5px", color: "#143a63", cursor: "pointer" } }>Retirer</button>
            </div>
        </div>
    )
}

export default ProductBox