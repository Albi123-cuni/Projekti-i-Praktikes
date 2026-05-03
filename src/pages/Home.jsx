import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// ktu do jen produktet + filter 
//david + ?