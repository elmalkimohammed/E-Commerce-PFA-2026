import React from 'react';
import { styles } from '../../styles/styles';

const ActionButtons = ({ onCancel, onSave }) => (
  <div style={styles.actionButtons}>
    <button onClick={onCancel} style={styles.cancelButton}>
      Annuler
    </button>
    <button onClick={onSave} style={styles.saveButton}>
      Enregistrer
    </button>
  </div>
);

export default ActionButtons;