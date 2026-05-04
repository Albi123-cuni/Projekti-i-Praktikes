import React from "react";
import "./layout.css";
import Footer from "../../components/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* HEADER */}
      <header className="header">
        <div className="logo">ShopX</div>

        <nav className="nav">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Kontakt</a>
        </nav>

        <div className="icons">
          <span>🔍</span>
          <span>❤️</span>
          <span>🛒</span>
        </div>
      </header>

      
      <main className="main">{children}</main>

      
      <Footer />
    </div>
  );
};

export default Layout;
