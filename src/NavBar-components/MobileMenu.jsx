import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";

export default function MobileMenu({
  isOpen = false,
  items = ["Home", "Store", "About", "Contact"],
  cartCount = 0,
  wishlistCount = 0,
  onNavLink,
  onCart,
  onWishlist,
  placeholder = "Search...",
}) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const getPath = (item) => {
    switch (item.toLowerCase()) {
      case "home":
        return "/";
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
        borderTop: "1px solid #ccc",
        padding: "1rem 1rem 1.5rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <SearchBar
          value={query}
          onSearch={(next) => setQuery(next)}
          placeholder={placeholder}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        {items.map((item) => (
          <Link
            key={item}
            to={getPath(item)}
            onClick={() => onNavLink?.(item)}
            style={{
              color: "#000",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            {item}
          </Link>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          paddingTop: "1rem",
          borderTop: "1px solid #ccc",
        }}
      >
        <div
          onClick={onWishlist}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Heart size={20} style={{ color: "#000" }} />
          <span style={{ fontSize: "14px", color: "#000" }}>
            Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
          </span>
        </div>
        <div
          onClick={onCart}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <ShoppingCart size={20} style={{ color: "#000" }} />
          <span style={{ fontSize: "14px", color: "#000" }}>
            Cart {cartCount > 0 && `(${cartCount})`}
          </span>
        </div>
      </div>
    </div>
  );
}
