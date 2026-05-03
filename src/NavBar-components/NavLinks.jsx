import { Link } from "react-router-dom";

export default function NavLinks({
  items = ["Home", "Store", "About", "Contact"],
  onLink,
}) {
  const getPath = (item) => {
    switch (item.toLowerCase()) {
      case "home":
        return "/";
      case "store":
        return "/store";
      case "about":
        return "/about";
      case "contact":
        return "/contact";
      case "wishlist":
        return "/wishlist";
      case "cart":
        return "/cart";
      case "login":
        return "/login";
      default:
        return "/";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2.5rem",
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <Link
          key={item}
          to={getPath(item)}
          onClick={() => onLink?.(item)}
          style={{
            color: "#0f172a",
            textDecoration: "none",
            fontSize: "16px",
            transition: "color 0.2s",
            cursor: "pointer",
            fontWeight: 500,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#4f46e5")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#0f172a")}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
