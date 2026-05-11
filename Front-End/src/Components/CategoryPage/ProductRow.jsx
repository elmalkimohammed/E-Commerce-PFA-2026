import { useState } from "react"
import "../styles/productRow.css"
import { useNavigate } from "react-router-dom"

function ProductRow({ prodId , prodName , prodCateg , prodPrice , prodImage , prodMime , prodImageUrl }) {

    const navigate = useNavigate()
    const [imageError, setImageError] = useState(false)

    const imgSrc = imageError ? null
        : prodImageUrl ? prodImageUrl
        : (prodImage && prodMime)
            ? `data:${prodMime};base64,${prodImage}`
            : null

    const goToDetails = () => {
        navigate(`/product/${prodId}`)
    }

    const price = prodPrice.toLocaleString()

    return(
        <div className="prodRow">

            <div className="leftInfos">

                {imgSrc ? (
                    <img src={imgSrc} alt="Image De Produit" onError={() => setImageError(true)} />
                ) : (
                    <i className="bi bi-image" style={{ fontSize: "2.5rem", color: "#aaa" }} />
                )}

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