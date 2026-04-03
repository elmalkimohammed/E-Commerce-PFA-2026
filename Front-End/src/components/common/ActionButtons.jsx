import React from 'react';
import { styles } from '../../styles/styles';

const ActionButtons = ({  onSave }) => (
  <div style={styles.actionButtons}>
    <button onClick={onSave} style={styles.saveButton}>
      Enregistrer
    </button>
  </div>
);

export default ActionButtons;