import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { prodAPI } from "../../services/servicesAPI";
import SearchBar from "./SearchBar";
import axios from "axios" 

import "../../pages/Styles/TopNavStyle.css";

function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ categories , setCategories ] = useState([]);
  const [ spanState , setSpanState ] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);  
  const navigate = useNavigate()

  const navChecker = () => {
    if ( localStorage.getItem("generatedJWT_Token") ) navigate("/ProfilePage")
    else navigate("/Authentication")
  }

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

  const displaySpan = () => {
    if ( !spanState ){
      setSpanState(true)
    } else {
      setSpanState(false)
    }
  }

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
          {/* OLD SEARCH ICON - NOW OPENS THE SEARCH BAR */}
          <i 
            className="bi bi-search" 
            aria-hidden 
            onClick={() => setSearchOpen(!searchOpen)}
            style={{ cursor: 'pointer' }}
          ></i>
          <SearchBar isOpen={searchOpen} setIsOpen={setSearchOpen} />
          <i className="bi bi-person" aria-hidden onClick={ navChecker }></i>
          <span className="cart-icon">
            <i className="bi bi-cart" aria-hidden onClick={ () => { navigate("/CartPage") } } ></i>
            <span className="cart-badge">3</span>
          </span>
        </div>
      </nav>
      
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