import { Link } from "react-router-dom";

export default function NavLinks({ items }) {
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      {items.map((item) => (
        <Link
          key={item}
          to={
            item === "Home"
              ? "/"
              : item === "Store"
              ? "/store"
              : item === "About"
              ? "/about"
              : item === "Contact"
              ? "/contact"
              : item === "Login"
              ? "/login"
              : "/profile"
          }
          style={{ textDecoration: "none", color: "black" }}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}