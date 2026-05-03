import ProductCard from "../components/ProductCard";


export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
       
        <ProductCard
          name="Product 1"
          price={29.99} 
        />
      </div>
    </div>
  );
}

// ktu do jen produktet + filter 
//david + ?