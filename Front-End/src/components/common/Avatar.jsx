import React from 'react';

const Avatar = ({ src, name, size = 80 }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size / 2.8,
        fontWeight: 700,
        color: "#fff",
        border: "3px solid #bfdbfe",
        overflow: "hidden",
        flexShrink: 0,
        fontFamily: "'Playfair Display', serif",
        letterSpacing: 1,
      }}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials
      )}
    </div>
  );
};

export default Avatar;