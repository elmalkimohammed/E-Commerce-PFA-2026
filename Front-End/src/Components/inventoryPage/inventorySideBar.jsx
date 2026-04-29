import "../styles/MonitSideBar.css";

function InventorySideBar({ onSwitch }) {
  return (
    <div className="sideBar">
      <h1 style={{ textAlign: "center" }}>Side Bar</h1>
      <p onClick={() => onSwitch("products")}>Produits</p>
      <p onClick={() => onSwitch("createdProducts")}>Produits Crées</p>
      <p onClick={() => onSwitch("orders")}>Ordres</p>
      <p onClick={() => onSwitch("carts")}>Panniers</p>
      <p onClick={() => onSwitch("createdCarts")}>Panniers Crées</p>
      <p onClick={() => onSwitch("reviews")}>Reviews</p>
      <p onClick={() => onSwitch("createdReviews")}>Reviews Crées</p>
    </div>
  );
}

export default InventorySideBar;
