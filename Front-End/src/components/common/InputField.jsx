import React, { useState } from 'react';
import { styles } from '../../styles/styles';

const InputField = ({ label, type = "text", value, onChange, placeholder, error }) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...styles.input,
          borderColor: error ? "#dc2626" : focused ? "#2563eb" : "#cbd5e1",
          boxShadow: error ? "0 0 0 3px #fee2e2" : focused ? "0 0 0 3px #bfdbfe55" : "none",
          background: focused ? "#fff" : "#f8fafc",
        }}
      />
      {error && <span style={styles.errorText}>{error}</span>}
    </div>
  );
};

export default InputField;