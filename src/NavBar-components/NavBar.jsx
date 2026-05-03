import { useState } from "react";
import  Logo  from "./Logo";
import  NavLinks  from "./NavLinks";
import  SearchBar  from "./SearchBar";
import HamburgerButton from "./HamburgerButton";
import  MobileMenu  from "./MobileMenu";
import DesktopIcons from "./DesktopIcons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(2);

  const handleNavLink = (item) => {
    console.log("Navigating to:", item);
    setIsOpen(false);
  };

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const handleCart = () => {
    console.log("Cart clicked");
  };

  const handleWishlist = () => {
    console.log("Wishlist clicked");
  };

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
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Logo */}
       

        {/* Desktop Nav */}
        <div style={{ display: "none", flex: 1 }} className="desktop-nav">
          <NavLinks onLink={handleNavLink} />
        </div>

        {/* Search */}
        <div style={{ display: "none", flex: 1 }} className="desktop-search">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Desktop Icons */}
        <div style={{ display: "none" }} className="desktop-icons">
          <DesktopIcons
            cartCount={cartCount}
            wishlistCount={wishlistCount}
            onCart={handleCart}
            onWishlist={handleWishlist}
          />
        </div>

        {/* Hamburger Menu */}
        <div className="mobile-menu-btn">
          <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
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
