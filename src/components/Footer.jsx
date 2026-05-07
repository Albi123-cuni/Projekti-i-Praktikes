import React from "react"

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#111",
      color: "#fff",
      padding: "40px 20px 20px",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    section: {
      marginBottom: "20px",
      maxWidth: "300px",
    },
    bottom: {
      borderTop: "1px solid #444",
      marginTop: "20px",
      paddingTop: "10px",
      textAlign: "center",
      fontSize: "14px",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      marginBottom: "5px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
    },
  }

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3>Shop</h3>
          <p>Your favorite place to buy products online.</p>
        </div>

        <div style={styles.section}>
          <h4>Links</h4>

          <ul style={styles.list}>
            <li style={styles.listItem}>
              <a href="/" style={styles.link}>
                Home
              </a>
            </li>

            <li style={styles.listItem}>
              <a href="/store" style={styles.link}>
                Store
              </a>
            </li>

            <li style={styles.listItem}>
              <a href="/about" style={styles.link}>
                About
              </a>
            </li>

            <li style={styles.listItem}>
              <a href="/contact" style={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4>Contact</h4>
          <p>Email: shop@email.com</p>
          <p>Phone: +355 69 123 4567</p>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>© 2026 Shop. All rights reserved.</p>
      </div>
    </footer>
  )
}
