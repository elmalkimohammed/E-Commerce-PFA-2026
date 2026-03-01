

function ProductBox( { productImage , productName , productDescription , productPrice , productMaxStock } ) {
    return(
        <>
            <div className="leftSide">
                <div className="imageProd"></div>
                <div className="description">
                    <h1></h1>
                    <h2></h2>
                    <h3></h3>
                </div>
            </div>
            <div className="rightSide">
                <div className="stockControl">
                    <button className="subs">-</button>
                    <p></p>
                    <button className="add">+</button>
                </div>
                <button>Retirer</button>
            </div>
        </>
    )
}

export default ProductBox
