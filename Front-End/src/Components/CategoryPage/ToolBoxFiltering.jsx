import "../styles/toolBoxFiltering.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons' 
import { useState } from "react"

function ToolBoxFiltering({ buttonState , setCategory , setPrice }) {

        const [ categFilterValue , setCategFilterValue ] = useState("All")
        const [ priceFilterValue , setpriceFilterValue ] = useState("0")

        const handleApply = async () => {
            setCategory(categFilterValue)
            setPrice(priceFilterValue)
            buttonState(true)
        }

        const handleReset = async () => {
            setCategory("All")
            setPrice("0")
            buttonState(false)
        }

    return(
        <div className="toolBoxSection">
            <div className="title">
                <FontAwesomeIcon icon={faFilter} />
                <h1>Filtres</h1>
            </div>
            <div className="toolBox">
                <table>
                    <tbody>
                        <tr>
                            <td>catégories</td>
                            <td>fourchette de prix</td>
                        </tr>
                        <tr>
                            <td>
                                <select value={categFilterValue} onChange={ (e) => { setCategFilterValue(e.target.value) } }>
                                    <option value="All">All</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Clothing">Clothing</option>
                                    <option value="Home & Garden">Home &amp; Garden</option>
                                    <option value="Books">Books</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Toys">Toys</option>
                                    <option value="Food">Food</option>
                                </select>
                            </td>
                            <td>
                                <select value={priceFilterValue} onChange={ (e) => { setpriceFilterValue(e.target.value) } }>
                                    <option value="0">All Prices</option>
                                    <option value="1">Under $25</option>
                                    <option value="2">$25 {"<->"} $50</option>
                                    <option value="3">$50 {"<->"} $100</option>
                                    <option value="4">Over $100</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="actions">
                    <button onClick={ handleApply }>Appliquer</button>
                    <button onClick={ handleReset }>Réinitialiser</button>
                </div>
            </div>
        </div>
    )
}

export default ToolBoxFiltering
