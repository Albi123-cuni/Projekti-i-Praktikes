import { useId } from "react";

export default function StoreSearch({
  value = "",
  onSearch,
  placeholder = "Search items...",
}) {
  const id = useId();

  return (
    <div style={{ minWidth: 0, width: "100%", maxWidth: "400px" }}>
      <label
        htmlFor={id}
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Search products
      </label>
      <input
        id={id}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onSearch?.(e.target.value)}
        style={{
          width: "100%",
          minWidth: 0,
          height: "48px",
          padding: "0 16px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "15px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}