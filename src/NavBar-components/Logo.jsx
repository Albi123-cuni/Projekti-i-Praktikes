import { Link } from "react-router-dom";

export default function Logo( ) {
  return (
    <Link
      to="/"
      style={{
        fontSize: "20px",
        fontWeight: "500",
        color: "#000",
        textDecoration: "none",
        cursor: "pointer",
        transition: "opacity 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      
    </Link>
  );
}
