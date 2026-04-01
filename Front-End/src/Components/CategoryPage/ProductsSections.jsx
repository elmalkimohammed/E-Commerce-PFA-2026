import ProductRow from "./ProductRow"

function ProductsSection({ productsList , desiredCategory , desiredPrice }) {

    const filteredProducts = productsList.filter((prod) => {

    /* Category Filtering */
    if (desiredCategory !== "All") {
        if (prod.category.trim() !== desiredCategory.trim()) {
            return false
        }
    }



    /* Price Filtering */
    if (desiredPrice !== "0") {

        const prodPrice = prod.price  

        switch (desiredPrice) {

            case "1": // under 25
                if (prodPrice >= 25) return false
                break

            case "2": // 25 - 50
                if (prodPrice < 25 || prodPrice > 50) return false
                break

            case "3": // 50 - 100
                if (prodPrice < 50 || prodPrice > 100) return false
                break

            case "4": // over 100
                if (prodPrice <= 100) return false
                break

            default:
                break
        }
    }

    return true
})

    return(
        <div className="dispSection">

            <h1 style={{ color: "black", textAlign: "start", padding: "20px" }}>
                Produits
            </h1>

            <section style={{ backgroundColor:"#fff", borderBottomRightRadius:"12px", borderBottomLeftRadius:"12px"}}>

                {filteredProducts.map(prod => (

                    <ProductRow
                        key={prod.id}
                        prodId={prod.id}
                        prodName={prod.name}
                        prodCateg={prod.category}
                        prodPrice={prod.price}
                        prodImage={prod.image}
                        prodMime={prod.mimetype}
                    />

                ))}

            </section>

        </div>
    )
    
}


export default ProductsSection