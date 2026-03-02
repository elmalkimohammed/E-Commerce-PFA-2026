import "../styles/ProductBox.css"

function ProductBox( { productMimeType , productImage , productName , productDescription , productPrice , productMaxStock } ) {
    
    const imgSrc = `data:${ productMimeType };base64,${ productImage }`

    return(
        <div className="prodBoxContainer">
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
                    <button className="subs">-</button>
                    <p>2</p>
                    <button className="add">+</button>
                </div>
                <button>Retirer</button>
            </div>
        </div>
    )
}

export default ProductBox
