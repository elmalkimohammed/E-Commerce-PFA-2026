import ProductRow from "./ProductRow"

function ProductsSection( { productsList , desiredCategory , desiredPrice } ) {

    const filteredProducts = productsList.filter( prod => {

        /* Category Filtering */
        if ( desiredCategory !== "All" && prod.category !== desiredCategory ) return false

        /* Price Filtering */
        if ( desiredPrice !== "0" ) {
            const prodPrice = prod.price
            switch ( desiredPrice ) {
                case "1": 
                    if ( prodPrice >= 25 ) return false
                    break
                case "2": 
                    if ( prodPrice < 25 || prodPrice > 50 ) return false
                    break
                case "3": 
                    if ( prodPrice < 50 || prodPrice > 100 ) return false
                    break
                case "4":
                    if ( prodPrice <= 100 ) return false
                    break
            }
        }
        return true

    } )
    
    /* Show The Tips Component First Before Starting The Filter Process */
        return(
        <div className="dispSection">
            <h1 style={{ color: "black", textAlign: "start", padding: "20px" }}>Produits</h1>
            <section style={{ backgroundColor: "#fff", borderBottomRightRadius: "12px", borderBottomLeftRadius: "12px"}}>
                { filteredProducts.map( ( prod ) => {
                    return (
                        <ProductRow prodName={ prod.name } prodCateg={ prod.category } prodPrice={ prod.price }/>
                    )
                } ) }
            </section>
            <footer></footer>
        </div>
    )
}

export default ProductsSection
