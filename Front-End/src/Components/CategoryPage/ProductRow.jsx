import "../styles/productRow.css"

function ProductRow({ prodName , prodCateg , prodPrice }) {
    return(
        <>
            <div className="prodRow">
                <div className="leftInfos">
                    <img src="" alt="Image De Produit" />
                    <div className="desc_name">
                        <h1>{ prodName }</h1>
                        <p>{ prodCateg }</p>
                    </div>
                </div>
                <div className="rightInfos">
                    <h1>{ prodPrice }$</h1>
                    <button>Détails</button>
                </div>
            </div>
        </>
    )
}

export default ProductRow
