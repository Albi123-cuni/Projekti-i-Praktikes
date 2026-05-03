import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SearchBar from "../NavBar-components/SearchBar";
import products from "../data/products";

export default function Store() {
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get("search") || "";
  const [search, setSearch] = useState(urlQuery);

  useEffect(() => {
    if (urlQuery) {
      setSearch(urlQuery);
    }
  }, [urlQuery]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
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
          Shop
        </p>
        <h1
          style={{ margin: "12px 0 0", fontSize: "clamp(2rem, 2.5vw, 2.6rem)" }}
        >
          All available products
        </h1>
        <p
          style={{
            color: "#64748b",
            marginTop: "12px",
            maxWidth: "720px",
            lineHeight: "1.7",
          }}
        >
          Search the complete catalog and save items to your wishlist for later.
        </p>
      </section>

      <SearchBar
        value={search}
        onSearch={setSearch}
        placeholder="Search products in the shop..."
        style={{ width: "100%", maxWidth: "480px" }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {filteredProducts.map((product) => (
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
    </div>
  );
}
