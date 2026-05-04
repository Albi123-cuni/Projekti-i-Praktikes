import React from "react"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.layout}>
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

      {/* MAIN CONTENT */}
      <main className="main">{children}</main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 ShopX. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout
