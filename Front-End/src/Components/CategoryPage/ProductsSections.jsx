

function ProductsSection() {

    const mockData = [
        { name: "Wireless Noise-Cancelling Headphones", category: "Electronics", price: 79.99 },
        { name: "Running Shoes Pro X", category: "Sports", price: 59.99 },
        { name: "Smart Coffee Maker", category: "Home & Garden", price: 49.99 },
        { name: "The Art of Clean Code", category: "Books", price: 24.99 },
        { name: "Mechanical Keyboard TKL", category: "Electronics", price: 129.99 }
    ]
    
    /* Show The Tips Component First Before Starting The Filter Process */
        return(
        <div className="dispSection">
            <h1 style={{ color: "black", textAlign: "start", padding: "20px" }}>Produits</h1>
            <section style={{ backgroundColor: "#fff", borderBottomRightRadius: "12px", borderBottomLeftRadius: "12px"}}>
                
            </section>
            <footer></footer>
        </div>
    )
}

export default ProductsSection
