import { useEffect, useMemo, useState } from "react";
import {
  getAllCarts,
  getAllOrders,
  getAllProducts,
  getAllReviews,
} from "../../services/inventoryService";
import "../styles/adminMonitoringGlobalStyles.css";

function toText(value) {
  if (value === null || value === undefined) return "-";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function InventoryMonitor({ currentPage }) {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [carts, setCarts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const run = async () => {
      setError("");
      try {
        const [prodData, orderData, cartData, reviewData] = await Promise.all([
          getAllProducts(),
          getAllOrders(),
          getAllCarts(),
          getAllReviews(),
        ]);
        setProducts(prodData);
        setOrders(orderData);
        setCarts(cartData);
        setReviews(reviewData);
      } catch (e) {
        setError(e?.response?.data?.message || "Erreur pendant le chargement des donnees.");
      }
    };
    run();
  }, []);

  const tableContent = useMemo(() => {
    if (currentPage === "products" || currentPage === "createdProducts") {
      return {
        headers:
          currentPage === "createdProducts"
            ? ["Id", "Nom", "Description", "Prix", "Stock", "Categorie", "Vendeur", "Date Creation"]
            : ["Id", "Nom", "Description", "Prix", "Stock", "Categorie", "Vendeur"],
        rows: products.map((p) =>
          currentPage === "createdProducts"
            ? [p.id, p.name, p.description, p.price, p.stock, p.category, p.userId, p.createdAt || "N/A"]
            : [p.id, p.name, p.description, p.price, p.stock, p.category, p.userId]
        ),
      };
    }

    if (currentPage === "orders") {
      return {
        headers: ["OrderId", "UserId", "Status", "Items", "Date Creation"],
        rows: orders.map((o) => [
          o.orderId,
          o.userId,
          o.status,
          (o.items || []).length,
          o.createdAt,
        ]),
      };
    }

    if (currentPage === "carts" || currentPage === "createdCarts") {
      return {
        headers:
          currentPage === "createdCarts"
            ? ["CartId", "UserId", "Items", "Date Creation"]
            : ["CartId", "UserId", "Items"],
        rows: carts.map((c) =>
          currentPage === "createdCarts"
            ? [c.cartId, c.userId, (c.items || []).length, c.createdAt]
            : [c.cartId, c.userId, (c.items || []).length]
        ),
      };
    }

    return {
      headers:
        currentPage === "createdReviews"
          ? ["ReviewId", "ProductId", "UserId", "Rating", "Comment", "Date Creation"]
          : ["ReviewId", "ProductId", "UserId", "Rating", "Comment"],
      rows: reviews.map((r) =>
        currentPage === "createdReviews"
          ? [r.reviewId, r.productId, r.userId, r.rating, r.comment, r.createdAt]
          : [r.reviewId, r.productId, r.userId, r.rating, r.comment]
      ),
    };
  }, [currentPage, products, orders, carts, reviews]);

  return (
    <div style={{ width: "100%", overflow: "auto" }}>
      {error && <p style={{ color: "#b00020", fontWeight: "bold", marginBottom: "12px" }}>{error}</p>}
      <table className="MonitoringGlobalStyles">
        <tbody>
          <tr>
            {tableContent.headers.map((header) => (
              <td key={header}>{header}</td>
            ))}
          </tr>
          {tableContent.rows.map((row, index) => (
            <tr key={`${currentPage}-${index}`}>
              {row.map((cell, i) => (
                <td key={`${index}-${i}`}>{toText(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryMonitor;
