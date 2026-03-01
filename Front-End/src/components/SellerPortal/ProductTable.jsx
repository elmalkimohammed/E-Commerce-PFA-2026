import { Pencil, Trash2 } from "lucide-react";

export default function ProductTable({ products, onEdit, onDelete }) {
  if (products.length === 0) {
    return (
      <section className="products-section">
        <h2 className="section-title">Your Products</h2>
        <div className="empty-state">No products yet. Add your first product below.</div>
      </section>
    );
  }

  return (
    <section className="products-section">
      <h2 className="section-title">Your Products</h2>
      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Name & Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <span className="product-name">{product.name}</span>
                  {product.description && (
                    <p className="product-description">{product.description}</p>
                  )}
                </td>
                <td>
                  <span className="category-badge">{product.category}</span>
                </td>
                <td className="product-price">${parseFloat(product.price).toFixed(2)}</td>
                <td>
                  <span className={`stock-badge ${product.stock < 5 ? "low" : ""}`}>
                    {product.stock} units
                  </span>
                </td>
                <td className="actions-cell">
                  <button className="action-btn edit-btn" onClick={() => onEdit(product)} title="Edit product">
                    <Pencil size={15} /> Edit
                  </button>
                  <button className="action-btn delete-btn" onClick={() => onDelete(product.id)} title="Delete product">
                    <Trash2 size={15} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
