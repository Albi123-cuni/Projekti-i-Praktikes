  import { useState } from "react";
  import products from "../data/products";

  export default function Searchbar() {
    const [search, setSearch] = useState("");

    const filteredData = products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div style={{ padding: "20px", marginTop: "50px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            height: "40px",
            border: "1px solid #ccc",
            padding: "0 10px",
            borderRadius: "8px",
            marginBottom: "20px",
            width: "100%",
          }}
        />

        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredData.map((item) => (
            <li key={item.id} style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
              <p style={{ fontSize: "18px", margin: 0 }}>{item.name}</p>
              <p style={{ color: "gray", margin: 0 }}>${item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }