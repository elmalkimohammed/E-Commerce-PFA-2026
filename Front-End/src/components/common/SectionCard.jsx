import React from 'react';
import { styles } from '../../styles/styles';

const SectionCard = ({ title, children, style = {} }) => (
  <div style={{ ...styles.card, ...style }}>
    <div style={styles.cardHeader}>
      <div style={styles.cardHeaderAccent} />
      <span style={styles.cardTitle}>{title}</span>
    </div>
    <div style={styles.cardContent}>{children}</div>
  </div>
);

export default SectionCard;