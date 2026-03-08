import ProductBox from "../Components/CartPage/ProductBox"
import CommandDesc from "../Components/CartPage/CommandDesc"
import TopNav from "../Components/navbarComponent/TopNav"
import "./Styles/CartPage.css"

import { prodAPI } from "../services/servicesAPI"
import { cartAPI } from "../services/servicesAPI"
import { useState , useEffect , useCallback } from "react"

import axios from "axios"

function CartPage() {

    /* Data Simulation */

    const [ fullCart , setFullCart ] = useState({ items:[] })
    const [ loading , setLoading ] = useState(true)
    const [ products , setProducts ] = useState([]) // The Products From CartServie
    const [ productsInfos , setProductsInfos ] = useState([]) // The Products From ProductService
    const [ prodPrice , setProdPrice ] = useState(0)
    const [ totalPrice , setTotalPrice ] = useState(0)
    const [ quantities , setQuantities ] = useState({})

    /* The Logs Are For Testing Purposes Only */

    useEffect( () => {
        console.log(productsInfos)
    } , [productsInfos])

    useEffect( () => {
        console.log(products)
        products.map( async () => {
            /* Fetch Each One Of Our Product's Infos */
            const promises = products.map( 
                (item) => axios.get(`${prodAPI}/${item.productId}`)
            )
            const responses = await Promise.all(promises)
            setProductsInfos( responses.map( res => res.data ) )
        } )
    }, [products])

    useEffect( () => {
        /* Recover The Token From localStorage */
        const token = localStorage.getItem("generatedJWT_Token")
        /* Declaring The Constant Responsible For The Config */ 
        const tokenSender = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        /* 
            Getting The Full Cart From The CartService API 
            Going Through Each Object Of The 'items' Arrays And Putting It Inside The State 'Products' To Be Mapped On Later
        */
        axios.get(`${ cartAPI }/getCart` , tokenSender ).then(
            (response) => {
                console.log(response.data)
                setFullCart(response.data)
                setProducts(response.data.items)
                setLoading(false)
            }
        )
    }, [] )

    useEffect(() => {
        let total = 0;
        productsInfos.forEach(product => {
            const quantity = quantities[product.id] || 0;
            total += product.price * quantity;
        });
        // Only update if the total has actually changed
        if (total !== totalPrice) {
            setTotalPrice(total);
        }
    }, [productsInfos, quantities]);

    const handleQuantityChange = useCallback((productId, quantity) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: quantity
        }));
    }, []);

    /* Display A Loading Screen Unti The Data Is Fetched Successfully*/
    if( loading ) {
        return(
            <div>loading.....</div>
        )
    }

    return(
        <>
            <TopNav/>
            {
                /* Checking If The Cart Is Empty Or Full With Items To Choose Which Of These Displays Should Render To The User */
                productsInfos.length === 0 ? 
                (
                    <div className="entireContainer" style={ { justifyContent: "center", marginTop: "0px" } }>
                        <h1>Votre pannier</h1>
                        <div className="cartContainer">
                            <div className="cartItems" style={ { display: "flex", flexDirection: "column", gap: "1em" } }>
                                <div style={ { fontSize: "50px", fontWeight: "bolder", textAlign: "center" } }>There's No Added Item So Far... <br/>Try Adding One And Check This Page Again!</div> 
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <div className="entireContainer">
                        <h1>Votre pannier</h1>
                        <div className="cartContainer">
                            <div className="cartItems" style={ { display: "flex", flexDirection: "column", gap: "1em" } }>
                                {
                                    /* Going Through The 'productsInfos' Array Of Promises And Display The Infos Of Each One Of Them From The ProductService API */
                                    productsInfos.map( prod =>
                                        <ProductBox key={prod.id} productId={prod.id} productName={prod.name} productDescription={prod.description} productPrice={prod.price} productMaxStock={prod.stock} onQuantityChange={handleQuantityChange}/>,
                                    )
                                }
                            </div>
                            <CommandDesc totalP={totalPrice}/>
                        </div>
                    </div> 
                )
            }
            
        </>
    )
}

export default CartPage
