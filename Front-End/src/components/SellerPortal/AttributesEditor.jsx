import { Plus, X } from "lucide-react";

// Receives: attributes = [{ key: "", value: "" }, ...]
// Emits:    onChange(newAttributes)

export default function AttributesEditor({ attributes, onChange }) {
  const add = () => {
    onChange([...attributes, { key: "", value: "" }]);
  };

  const remove = (index) => {
    onChange(attributes.filter((_, i) => i !== index));
  };

  const update = (index, field, val) => {
    const updated = attributes.map((attr, i) =>
      i === index ? { ...attr, [field]: val } : attr
    );
    onChange(updated);
  };

  return (
    <div className="form-group">
      <label>Attributes</label>

      {attributes.length > 0 && (
        <div className="attributes-list">
          {attributes.map((attr, i) => (
            <div key={i} className="attribute-row">
              <input
                type="text"
                placeholder="Key (e.g. Color)"
                value={attr.key}
                onChange={(e) => update(i, "key", e.target.value)}
                className="attr-input"
              />
              <span className="attr-sep">:</span>
              <input
                type="text"
                placeholder="Value (e.g. Red)"
                value={attr.value}
                onChange={(e) => update(i, "value", e.target.value)}
                className="attr-input"
              />
              <button
                type="button"
                className="attr-remove"
                onClick={() => remove(i)}
                title="Remove attribute"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      <button type="button" className="attr-add-btn" onClick={add}>
        <Plus size={15} />
        Add Attribute
      </button>
    </div>
  );
}
