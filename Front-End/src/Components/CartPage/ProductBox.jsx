import { useState } from "react"

import "../styles/ProductBox.css"

function ProductBox( { productMimeType , productImage , productName , productDescription , productPrice , productMaxStock } ) {
    
    const imgSrc = `data:${ productMimeType };base64,${ productImage }`

    const [ stockCounter , setStockCounter ] = useState(0)

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

    return(
        <div className="prodBoxContainer" style={ { height: "fit-content" } }>
            <div className="leftSide">
                <div className="imageProd">
                    <img src={ imgSrc } alt="Product's Image" />
                </div>
                <div className="description">
                    <h1>{ productName }</h1>
                    <h2>{ productDescription }</h2>
                    <h3>{ productPrice }</h3>
                </div>
            </div>
            <div className="rightSide">
                <div className="stockControl">
                    <button className="subs" onClick={ stockSubstraction }>-</button>
                    <p>{ stockCounter }</p>
                    <button className="add" onClick={ stockAddition }>+</button>
                </div>
                <button style={ { background: "transparent", borderStyle: "none", border: "1px solid black", fontWeight: "bolder", width: "fit-content", alignSelf: "flex-end", padding: "10px", borderRadius: "5px", color: "#143a63", cursor: "pointer" } }>Retirer</button>
            </div>
        </div>
    )
}

export default ProductBox
