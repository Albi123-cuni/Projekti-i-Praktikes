import { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import StoreSearch from "../NavBar-components/StoreSearch";
import products from "../data/products";
import Footer from "../components/Footer";

export default function Store() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const processedProducts = useMemo(() => {
    let result = [...products].filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    switch (sortOrder) {
      case "low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "a-z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return result;
  }, [search, sortOrder]);

  const addToWishlist = (product) => {
    try {
      const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
      const alreadySaved = existing.some((item) => item.id === product.id);
      const next = alreadySaved ? existing : [...existing, product];
      localStorage.setItem("wishlist", JSON.stringify(next));
      if (!alreadySaved) {
        alert(`${product.name} added to your wishlist.`);
      } else {
        alert(`${product.name} is already in your wishlist.`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const selectStyle = {
    padding: "12px 16px",
    borderRadius: "12px",
    border: "2px solid #f1f5f9",
    backgroundColor: "#fff",
    color: "#1e293b",
    fontSize: "0.9rem",
    fontWeight: "600",
    cursor: "pointer",
    outline: "none",
    minWidth: "220px",
    transition: "all 0.2s ease",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    backgroundSize: "16px",
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "20px" }}>
      <section>
        <p style={{ color: "#4f46e5", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", margin: 0 }}>
          Shop
        </p>
        <h1 style={{ margin: "12px 0 0", fontSize: "clamp(2rem, 2.5vw, 2.6rem)", fontWeight: "800", color: "#0f172a" }}>
          All available products
        </h1>
        <p style={{ color: "#64748b", marginTop: "12px", maxWidth: "720px", lineHeight: "1.7" }}>
          Search the complete catalog and save items to your wishlist for later.
        </p>
      </section>

      {/* Control Bar */}
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: "20px", 
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f8fafc",
        padding: "16px",
        borderRadius: "16px"
      }}>
        <StoreSearch
          value={search}
          onSearch={setSearch}
          placeholder="Search items..."
        />
        {/* Sort Dropdown */}
        <div style={{ position: "relative" }}>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={selectStyle}
            onFocus={(e) => e.target.style.borderColor = "#4f46e5"}
            onBlur={(e) => e.target.style.borderColor = "#f1f5f9"}
          >
            <optgroup label="Price">
              <option value="default">Sort by: Featured</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </optgroup>
            <optgroup label="Alphabetical">
              <option value="a-z">Name: A to Z</option>
              <option value="z-a">Name: Z to A</option>
            </optgroup>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "32px",
      }}>
        {processedProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            badge={product.featured ? "Top" : product.badge}
            description={product.description}
            onAddToWishlist={() => addToWishlist(product)}
          />
        ))}
      </div>

      {processedProducts.length === 0 && (
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", fontWeight: "500" }}>
            We couldn't find anything matching "{search}"
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}