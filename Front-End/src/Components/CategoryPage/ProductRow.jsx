import "../styles/productRow.css"
import { useNavigate } from "react-router-dom"

function ProductRow({ prodId , prodName , prodCateg , prodPrice , prodImage , prodMime }) {

    const navigate = useNavigate()

    const imgSrc = `data:${prodMime};base64,${prodImage}`

    const goToDetails = () => {
        navigate(`/product/${prodId}`)
    }

    const price = prodPrice.toLocaleString()

    return(
        <div className="prodRow">

            <div className="leftInfos">

                <img src={imgSrc} alt="Image De Produit" />

                <div className="desc_name">
                    <h1>{prodName}</h1>
                    <p>{prodCateg}</p>
                </div>

            </div>

            <div className="rightInfos">

                <h1>{price} MAD</h1>

                <button onClick={goToDetails}>
                    Détails
                </button>

            </div>

        </div>
    )
}

export default ProductRow