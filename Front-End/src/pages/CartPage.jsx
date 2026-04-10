import ProductBox       from "../Components/CartPage/ProductBox"
import CommandDesc      from "../Components/CartPage/CommandDesc"
import TopNav           from "../Components/navbarComponent/TopNav"
import NotAuthenticated from "../Components/CartPage/NotAuthenticated"
import "./Styles/CartPage.css"

import { prodAPI, cartAPI } from "../services/servicesAPI"
import { useState, useEffect, useCallback } from "react"
import axios from "axios"

function CartPage() {

    const token = localStorage.getItem("generatedJWT_Token")

    const [fullCart,      setFullCart]      = useState({ items: [] })
    const [loading,       setLoading]       = useState(true)
    const [products,      setProducts]      = useState([])
    const [productsInfos, setProductsInfos] = useState([])
    const [totalPrice,    setTotalPrice]    = useState(0)
    const [quantities,    setQuantities]    = useState({})


    useEffect(() => {
        console.log(fullCart)
    }, [fullCart])

    /* ── Logs dev ── */
    useEffect(() => { console.log(productsInfos) }, [productsInfos])
    useEffect(() => { console.log(products)      }, [products])

    /* ── Fetch product details ── */
    useEffect(() => {
        if (products.length === 0) return
        const fetchInfos = async () => {
            const promises  = products.map(item => axios.get(`${prodAPI}/${item.productId}`))
            const responses = await Promise.all(promises)
            setProductsInfos(responses.map(res => res.data))
        }
        fetchInfos()
    }, [products])

    /* ── Fetch cart (seulement si JWT existe) ── */
    useEffect(() => {
        if (!token) {
            setLoading(false)
            return
        }
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
        axios.get(`${cartAPI}/getCart`, config).then(response => {
            setFullCart(response.data)
            setProducts(response.data.items)
            setLoading(false)
        })

    }, [])

    /* ── Calcul total ── */
    useEffect(() => {
        let total = 0
        productsInfos.forEach(product => {
            const qty = quantities[product.id] || 0
            total += product.price * qty
        })
        if (total !== totalPrice) setTotalPrice(total)
    }, [productsInfos, quantities])

    const handleQuantityChange = useCallback((productId, quantity) => {
        setQuantities(prev => ({ ...prev, [productId]: quantity }))
    }, [])

    /* ── Construire cartItems pour le cookie ── */
    const cartItems = productsInfos.map(product => ({
        productId: product.id,
        productName: product.name,
        price: product.price,
        quantity: quantities[product.stock] || 0
    }))

    /* ── Loading ── */
    if (loading) return <div>loading.....</div>

    /* ── Pas de JWT ── */
    if (!token) return <><TopNav /><NotAuthenticated /></>

    return (
        <>
            <TopNav />
            {
                productsInfos.length === 0
                ? (
                    <div className="entireContainer" style={{ justifyContent: "center", marginTop: "0px" }}>
                        <h1>Votre pannier</h1>
                        <div className="cartContainer">
                            <div className="cartItems" style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                                <div style={{ fontSize: "50px", fontWeight: "bolder", textAlign: "center" }}>
                                    There's No Added Item So Far... <br />Try Adding One And Check This Page Again!
                                </div>
                            </div>
                        </div>
                    </div>
                )
                : (
                    <div className="entireContainer">
                        <h1>Votre pannier</h1>
                        <div className="cartContainer">
                            <div className="cartItems" style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                                {
                                    productsInfos.map(prod =>
                                        <ProductBox
                                            key={prod.id}
                                            productId={prod.id}
                                            productName={prod.name}
                                            productDescription={prod.description}
                                            productPrice={prod.price}
                                            productMaxStock={prod.stock}
                                            onQuantityChange={handleQuantityChange}
                                            stockchoix={fullCart.items.find(item => item.productId === prod.id)?.stock || 0}
                                        />
                                    )
                                }
                            </div>
                            {/* On passe cartItems à CommandDesc pour le cookie */}
                            <CommandDesc
                                totalP={totalPrice}
                                cartItems={cartItems}
                            />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default CartPage