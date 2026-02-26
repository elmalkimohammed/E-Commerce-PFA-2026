import React, { useState } from 'react';
import { styles } from '../../styles/styles';

const SelectField = ({ label, value, onChange, options }) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={styles.label}>{label}</label>
      <select
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...styles.input,
          cursor: "pointer",
          borderColor: focused ? "#2563eb" : "#cbd5e1",
          boxShadow: focused ? "0 0 0 3px #bfdbfe55" : "none",
          background: focused ? "#fff" : "#f8fafc",
          appearance: "none",
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;