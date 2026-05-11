import { Link } from "react-router-dom";
import { useState } from "react";

import Footer from "../components/Footer";

import ProductCard from "../components/ProductCard";
import products from "../data/products";
import Search from "../NavBar-components/SearchBar";
import Counter from "../Counter";
import Banner from "../components/Banner";

import "../App.css";


export default function Home() {
  const [homeSearch, setHomeSearch] = useState("");

  const featuredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(homeSearch.toLowerCase())
    )
    .slice(0, 6);

    

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
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      
      <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <p style={{
            color: "#4f46e5",
            fontWeight: "700",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0,
          }}>
            Featured Picks
          </p>

          <h1 style={{ margin: "8px 0 0", fontSize: "clamp(2.2rem, 3vw, 3rem)" }}>
            Top products from our collection
          </h1>

          <p style={{
            color: "#475569",
            margin: "16px 0 0",
            maxWidth: "720px",
            lineHeight: "1.75",
          }}>
            Discover the most popular items first.
          </p>
        </div>

        
  
    <div>
      {/* Banneri në krye */}
      <Banner />

      {/* Pjesa tjetër e faqes */}
      <h1>Mirësevini në Dyqanin tonë</h1>
      {/* ... produktet, kategoritë etj. */}
    </div>
  


        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Link
            to="/store"
            style={{
              padding: "12px 20px",
              borderRadius: "10px",
              backgroundColor: "#4f46e5",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
            }}
            
          >
            Shop the full collection
          </Link>

          <span style={{ color: "#64748b" }}>
            See all products in store
          </span>
        </div>
      </section>

      <Search
        value={homeSearch}
        onSearch={setHomeSearch}
        placeholder="Search products here..."
      />

      <Counter />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            badge={product.badge}
            description={product.description}
            onAddToWishlist={() => addToWishlist(product)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}


