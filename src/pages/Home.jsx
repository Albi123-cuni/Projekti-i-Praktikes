import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const MIN_PRICE = 0;
const MAX_PRICE = 1000;

export default function Home() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  const filtered = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => p.price <= maxPrice)
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>

      {/* Controls */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "24px", alignItems: "center" }}>
        
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ height: "40px", padding: "0 12px", borderRadius: "8px", border: "1px solid #ccc", flex: 1, minWidth: "200px" }}
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ height: "40px", padding: "0 12px", borderRadius: "8px", border: "1px solid #ccc" }}
        >
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A–Z</option>
          <option value="name-desc">Name: Z–A</option>
        </select>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <label>Max price: <strong>${maxPrice}</strong></label>
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <button
          onClick={() => { setSearch(""); setSortBy("default"); setMaxPrice(MAX_PRICE); }}
          style={{ height: "40px", padding: "0 16px", borderRadius: "8px", border: "1px solid #ccc", cursor: "pointer" }}
        >
          Reset
        </button>
      </div>

      {/* Results count */}
      <p style={{ color: "gray", marginBottom: "16px" }}>{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {filtered.map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
          ))}
        </div>
      ) : (
        <p>No products match your filters.</p>
      )}
    </div>
  );
}