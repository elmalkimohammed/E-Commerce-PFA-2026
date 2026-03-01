import React from 'react';
import { styles } from '../../styles/styles';

const Toast = ({ message, type = "success", onClose }) => {
  setTimeout(onClose, 2800);

  return (
    <div style={{
      ...styles.toast,
      background: type === "success" ? "#1e3a5f" : "#dc2626",
    }}>
      <span style={styles.toastIcon}>{type === "success" ? "✓" : "⚠️"}</span> 
      {message}
    </div>
  );
};

export default Toast;