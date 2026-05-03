import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";
import DesktopIcons from "./DesktopIcons";

export default function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNavLink = (item) => {
    console.log("Navigating to:", item);
    setIsOpen(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      navigate(`/store?search=${encodeURIComponent(query)}`);
    }
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const handleWishlist = () => {
    navigate("/wishlist");
  };

  const navItems = ["Home", "Store", "About", "Contact", "Login", "Profile"];

  return (
    <nav
      style={{
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1.5rem 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Logo text="Store" />
        </div>

        {/* NAV LINKS */}
        <div
          style={{ display: "none", flex: 1, justifyContent: "center" }}
          className="desktop-nav"
        >
          <NavLinks items={navItems} onLink={handleNavLink} />
        </div>

        {/* SEARCH */}
        <div
          style={{ display: "none", flex: 1, justifyContent: "center" }}
          className="desktop-search"
        >
          <SearchBar
            value={searchQuery}
            onSearch={handleSearch}
            placeholder="Search products..."
            style={{ maxWidth: "380px" }}
          />
        </div>

        <div
          style={{ display: "none", justifyContent: "flex-end" }}
          className="desktop-icons"
        >
          <DesktopIcons
            cartCount={cartCount}
            wishlistCount={wishlistCount}
            onCart={handleCart}
            onWishlist={handleWishlist}
          />
        </div>

        <div className="mobile-menu-btn">
          <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        items={navItems}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onNavLink={handleNavLink}
        onCart={handleCart}
        onWishlist={handleWishlist}
      />

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-search { display: flex !important; }
          .desktop-icons { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}