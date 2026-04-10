import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartAPI } from "../../services/servicesAPI";
import { prodAPI } from "../../services/servicesAPI";
import axios from "axios" 

import "../../pages/Styles/TopNavStyle.css";

function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ categories , setCategories ] = useState([]);
  const [ spanState , setSpanState ] = useState(false);
  const navigate = useNavigate()

  const navChecker = () => {
    if ( localStorage.getItem("generatedJWT_Token") ) navigate("/ProfilePage")
    else navigate("/Authentication") 
  }

  /* Fetching All Of The Available Categories From The API */
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

  /* Turn On/Off The Hidden Categories HTML Span */
  const displaySpan = () => {
    if ( !spanState ){
      setSpanState(true)
    } else {
      setSpanState(false)
    }
  }

  /* Taking The Value Of The Selected Category And Storing It In A Temporary Session */
  const storeCategory = ( value ) => {
    localStorage.setItem("selectedCategory" , value)
  }

  return (
    <>
      <nav className="top-nav">
        <p className="brand">TechStore</p>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>

        <div className={`redirect ${menuOpen ? "open" : ""}`}>
          <p><a href="/" onClick={() => setMenuOpen(false)}>Accueil</a></p>
          <p><a onClick={() => { setMenuOpen(false); displaySpan() } } className="categoryList">Catègories</a></p>
          <p><a href="#" onClick={() => setMenuOpen(false)}>À propos</a></p>
          <p><a href="/CategoryPage" onClick={() => setMenuOpen(false)}>Filtrage</a></p>
          <p><a href="#" onClick={() => setMenuOpen(false)}>Contact</a></p>
          { localStorage.getItem("generatedJWT_Token") && <p><a href="/SellerPortal" onClick={() => setMenuOpen(false)}>Vendres</a></p> }
        </div>

        <div className="user-icons">
          <i className="bi bi-search" aria-hidden></i>
          <i className="bi bi-person" aria-hidden onClick={ navChecker }></i>
          <span className="cart-icon">
            <i className="bi bi-cart" aria-hidden onClick={ () => { navigate("/CartPage") } } ></i>
          </span>
        </div>
      </nav>
      {/* Hidden Categories HTML Span */}
      { spanState &&
      <span className="hiddenCategories" style={{ position: "sticky", top: "56.8px", zIndex: "51" }}>
        { 
          categories.map( (foundCategory) => 
          <span 
          style={{ color: "white", cursor: "pointer", padding: "5px" }} ><a onClick={ (e) => { storeCategory(e.target.innerText); window.dispatchEvent(new Event("categoryChanged")); navigate("/CategoryPage") } } >{ foundCategory }</a>
          </span> ) 
        }
      </span>
      }
    </>
  );
}

export default TopNav;
