import { useState } from "react";


export default function Searchbar() {
  const [search, setSearch] = useState("");

  

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
       
          
      
      </ul>
    </div>
  );
}