import { useState, useEffect } from "react";

export default function WishList() {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Unable to load wishlist", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (error) {
      console.error("Unable to save wishlist", error);
    }
  }, [wishlist]);

  const removeItem = (index) => {
    setWishlist((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <section>
        <p
          style={{
            color: "#4f46e5",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            margin: 0,
          }}
        >
          Wishlist
        </p>
        <h1 style={{ margin: "10px 0 0" }}>Saved Items</h1>
        <p
          style={{
            color: "#64748b",
            marginTop: "12px",
            maxWidth: "720px",
            lineHeight: "1.7",
          }}
        >
          Review the products you saved for later. Remove them if you no longer
          want them in your wishlist.
        </p>
      </section>

      {wishlist.length === 0 ? (
        <div
          style={{
            background: "#f8fafc",
            padding: "24px",
            borderRadius: "18px",
            border: "1px solid #e2e8f0",
          }}
        >
          <p style={{ color: "#475569", margin: 0 }}>
            Your wishlist is empty. Add products from the store to save them
            here.
          </p>
        </div>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: "16px",
          }}
        >
          {wishlist.map((item, index) => (
            <li
              key={item.id ?? index}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "16px",
                alignItems: "center",
                padding: "18px",
                border: "1px solid #e2e8f0",
                borderRadius: "18px",
                background: "#fff",
              }}
            >
              <img
                src={
                  item.image ||
                  "https://via.placeholder.com/120x90?text=No+Image"
                }
                alt={item.name}
                style={{
                  width: "110px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <strong style={{ fontSize: "16px" }}>{item.name}</strong>
                <span style={{ color: "#475569" }}>
                  ${Number(item.price).toFixed(2)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => removeItem(index)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "10px",
                  border: "1px solid #cbd5e1",
                  background: "#fff",
                  color: "#1f2937",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
