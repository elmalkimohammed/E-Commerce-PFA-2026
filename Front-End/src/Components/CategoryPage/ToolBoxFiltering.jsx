import "../styles/toolBoxFiltering.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { useState , useEffect } from "react"
import { prodAPI } from "../../services/servicesAPI"
import { useSelector } from "react-redux"
import axios from "axios"

function ToolBoxFiltering({ buttonState, setCategory, setPrice }) {

    const [categFilterValue, setCategFilterValue] = useState("All")
    const [priceFilterValue, setPriceFilterValue] = useState("0")
    const [ Categories , setCategories ] = useState([])
    const chosenCateg = useSelector( ( state ) => state.chosenCategory.value )

    /* Checks If The User Trully Sorted Via The NavLink 'Catègories' And Sets The Select Value To The Desired One */
    useEffect( () => {
        if ( chosenCateg ) {
            setCategFilterValue(chosenCateg)
            handleApply()
        }
    }, [chosenCateg] )

    useEffect( () => {
        getCategories()
    }, [] )

  const getCategories = async () => {
    try {
      setCategories( (await axios.get(`${prodAPI}/getCategories`)).data )
    } catch (error) {
      alert(error.response?.data || "An Internal Error Happened While Trying To Fetch The Categories.....")
    }
  }

    const handleApply = () => {
        setCategory(categFilterValue)
        setPrice(priceFilterValue)
        buttonState(true)
    }

    const handleReset = () => {
        setCategFilterValue("All")
        setPriceFilterValue("0")

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

                            {/* CATEGORY FILTER */}
                            <td>
                                <select value={categFilterValue} onChange={(e)=>setCategFilterValue(e.target.value)}>
                                    <option value="All">All</option>
                                    {
                                        Categories.map( ( category ) => {
                                            return <option value={ category }>{category}</option>
                                        } )
                                    }
                                </select>
                            </td>

                            {/* PRICE FILTER */}
                            <td>
                                <select
                                    value={priceFilterValue}
                                    onChange={(e)=>setPriceFilterValue(e.target.value)}
                                >
                                    <option value="0">All Prices</option>
                                    <option value="1">Under 25 MAD</option>
                                    <option value="2">25 - 50 MAD</option>
                                    <option value="3">50 - 100 MAD</option>
                                    <option value="4">Over 100 MAD</option>
                                </select>
                            </td>

                        </tr>

                    </tbody>
                </table>

                <div className="actions">
                    <button onClick={handleApply}>Appliquer</button>
                    <button onClick={handleReset}>Réinitialiser</button>
                </div>

            </div>

        </div>
    )
}

export default ToolBoxFiltering