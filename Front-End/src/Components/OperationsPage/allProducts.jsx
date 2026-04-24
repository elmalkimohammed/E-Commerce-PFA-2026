
import AllProductsRow from "./Inside Components/allProductsRow"

import "../styles/adminMonitoringGlobalStyles.css"

function AllProducts() {
    return(
        <table className="MonitoringGlobalStyles">
            <tbody>
                <tr>
                    <td>Id Du Produit</td>
                    <td>Nom</td>
                    <td>Description</td>
                    <td>Prix</td>
                    <td>Stock</td>
                    <td>Attributs</td>
                    <td>Categorie</td>
                    <td>Vendeur</td>
                    <td>Images</td>
                    <td>Actions</td>
                </tr>
                <AllProductsRow productId={1} productName={"casque"} productDesc={"just a test desc"}
                    productPrice={29.99} productStock={25} productAttbs={ "red, 1cm, morroco" } 
                    productCategory={"Electronique"} productUserId={10}
                    productImages={"image/test.jpg, image/test2.jpg"}/>
                <AllProductsRow productId={1} productName={"casque"} productDesc={"just a test desc"}
                    productPrice={29.99} productStock={25} productAttbs={ "red, 1cm, morroco" } 
                    productCategory={"Electronique"} productUserId={10}
                    productImages={"image/test.jpg, image/test2.jpg"}/>
                <AllProductsRow productId={1} productName={"casque"} productDesc={"just a test desc"}
                    productPrice={29.99} productStock={25} productAttbs={ "red, 1cm, morroco" } 
                    productCategory={"Electronique"} productUserId={10}
                    productImages={"image/test.jpg, image/test2.jpg"}/>
            </tbody>
        </table>
    )
}

export default AllProducts
