import { useState, useEffect, useRef } from "react";
import { X, ImagePlus } from "lucide-react";
import AttributesEditor from "./AttributesEditor";

const CATEGORIES = ["Electronics", "Clothing", "Home & Garden", "Books", "Sports", "Toys", "Food", "Other"];

// Convert { key: value } dict → [{ key, value }] array for the editor
const dictToArray = (dict) =>
  dict ? Object.entries(dict).map(([key, value]) => ({ key, value: String(value) })) : [];

// Convert [{ key, value }] array → { key: value } dict for the API
const arrayToDict = (arr) =>
  Object.fromEntries(arr.filter((a) => a.key.trim()).map((a) => [a.key.trim(), a.value]));

export default function EditProductModal({ product, onSave, onClose }) {
  const [form, setForm] = useState({ ...product });
  const [images, setImages] = useState(product.images || []);
  const [attributes, setAttributes] = useState(dictToArray(product.attributes));
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef();

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    onSave({ ...form, images, attributes: arrayToDict(attributes) });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <h3 className="modal-title">Edit Product</h3>
          <button className="modal-close" onClick={onClose}><X size={18} /></button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Product Name *</label>
              <input name="name" type="text" value={form.name} onChange={handleChange} className={errors.name ? "error" : ""} />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Category *</label>
              <select name="category" value={form.category} onChange={handleChange} className={errors.category ? "error" : ""}>
                <option value="">Select a category</option>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.category && <span className="field-error">{errors.category}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea name="description" rows={3} value={form.description || ""} onChange={handleChange} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price ($) *</label>
              <input name="price" type="number" min="0" step="0.01" value={form.price} onChange={handleChange} className={errors.price ? "error" : ""} />
              {errors.price && <span className="field-error">{errors.price}</span>}
            </div>
            <div className="form-group">
              <label>Stock *</label>
              <input name="stock" type="number" min="0" value={form.stock} onChange={handleChange} className={errors.stock ? "error" : ""} />
              {errors.stock && <span className="field-error">{errors.stock}</span>}
            </div>
          </div>

          <AttributesEditor attributes={attributes} onChange={setAttributes} />

          <div className="form-group">
            <label>Product Images</label>
            <div className="image-upload-area" onClick={() => fileInputRef.current.click()}>
              <ImagePlus size={24} />
              <span>Click to add more images</span>
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
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary">Save Changes</button>
          </div>
        </form>

      </div>
    </div>
  );
}
