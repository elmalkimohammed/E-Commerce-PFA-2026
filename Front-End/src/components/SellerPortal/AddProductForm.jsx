import { useState, useRef } from "react";
import { ImagePlus, X } from "lucide-react";
import AttributesEditor from "./AttributesEditor";

const CATEGORIES = ["Electronics", "Clothing", "Home & Garden", "Books", "Sports", "Toys", "Food", "Other"];

const emptyForm = { name: "", category: "", description: "", price: "", stock: "" };

export default function AddProductForm({ onAddProduct }) {
  const [form, setForm] = useState(emptyForm);
  const [images, setImages] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleImageAdd = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({ file, url: URL.createObjectURL(file), name: file.name }));
    setImages((prev) => [...prev, ...previews]);
    fileInputRef.current.value = "";
  };

  const removeImage = (index) => setImages((prev) => prev.filter((_, i) => i !== index));

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.price || isNaN(form.price) || form.price <= 0) newErrors.price = "Enter a valid price";
    if (!form.stock || isNaN(form.stock) || form.stock < 0) newErrors.stock = "Enter a valid stock number";
    return newErrors;
  };

  // Convert [{key, value}] array → { key: value } dict for the API
  const buildAttributesDict = () =>
    Object.fromEntries(attributes.filter((a) => a.key.trim()).map((a) => [a.key.trim(), a.value]));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    onAddProduct({ ...form, images, attributes: buildAttributesDict() });
    setForm(emptyForm);
    setImages([]);
    setAttributes([]);
    setErrors({});
  };

  return (
    <section className="add-product-section">
      <h2 className="section-title">Add New Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Product Name *</label>
            <input id="name" name="name" type="text" placeholder="e.g. Wireless Headphones" value={form.name} onChange={handleChange} className={errors.name ? "error" : ""} />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select id="category" name="category" value={form.category} onChange={handleChange} className={errors.category ? "error" : ""}>
              <option value="">Select a category</option>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.category && <span className="field-error">{errors.category}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows={3} placeholder="Describe your product..." value={form.description} onChange={handleChange} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price ($) *</label>
            <input id="price" name="price" type="number" min="0" step="0.01" placeholder="0.00" value={form.price} onChange={handleChange} className={errors.price ? "error" : ""} />
            {errors.price && <span className="field-error">{errors.price}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock *</label>
            <input id="stock" name="stock" type="number" min="0" placeholder="0" value={form.stock} onChange={handleChange} className={errors.stock ? "error" : ""} />
            {errors.stock && <span className="field-error">{errors.stock}</span>}
          </div>
        </div>

        <AttributesEditor attributes={attributes} onChange={setAttributes} />

        <div className="form-group">
          <label>Product Images</label>
          <div className="image-upload-area" onClick={() => fileInputRef.current.click()}>
            <ImagePlus size={24} />
            <span>Click to upload images</span>
            <span className="upload-hint">PNG, JPG, WEBP supported</span>
          </div>
          <input ref={fileInputRef} type="file" accept="image/*" multiple style={{ display: "none" }} onChange={handleImageAdd} />
          {images.length > 0 && (
            <div className="image-previews">
              {images.map((img, i) => (
                <div key={i} className="image-preview">
                  <img src={img.url} alt={img.name} />
                  <button type="button" className="remove-image" onClick={() => removeImage(i)}><X size={12} /></button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">Add Product</button>
        </div>
      </form>
    </section>
  );
}
