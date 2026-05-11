import React from "react";

export default function Banner() {
  return (
    <div
      style={{
        width: "100%",
        height: "160px",
        backgroundColor: "#2563eb",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        marginBottom: "20px",
      }}
    >
      <h1 style={{ margin: 0 }}>🔥 OFERTA SPECIALE 🔥</h1>
      <p style={{ margin: 0 }}>Zbritje deri në 50%</p>
    </div>
  );
}