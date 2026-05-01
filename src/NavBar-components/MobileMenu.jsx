import { Heart, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";

export default function MobileMenu({
  isOpen = false,
  items = ["Home", "About", "Contact"],
  cartCount = 0,
  wishlistCount = 0,
  onNavLink,
  onCart,
  onWishlist,
}) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        borderTop: "1px solid #ccc",
        padding: "1rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Search in Mobile Menu */}
      <div style={{ marginBottom: "1rem" }}>
        <SearchBar placeholder="Search..." />
      </div>

      {/* Navigation Links in Mobile */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        {items.map((item) => (
          <a
            key={item}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavLink?.(item);
            }}
            style={{
              color: "#000",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Cart and Wishlist in Mobile */}
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
