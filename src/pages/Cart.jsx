import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

export default function Cart() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      return [];
    }
  });
  const navigate = useNavigate();

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Unable to save cart to localStorage", error);
    }
  }, [cart]);

  const addToCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { id, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getCartItem = (id) => cart.find((item) => item.id === id) || { quantity: 0 };

  const getProduct = (id) => products.find((p) => p.id === id);

  const total = cart.reduce((sum, item) => {
    const prod = getProduct(item.id);
    return sum + prod.price * item.quantity;
  }, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>

      <h2>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <button onClick={() => removeFromCart(product.id)} disabled={getCartItem(product.id).quantity === 0}>-</button>
                <button onClick={() => addToCart(product.id)} disabled={getCartItem(product.id).quantity >= product.stock}>+</button>
              </div>
              <span>added: {getCartItem(product.id).quantity}</span>
            </div>
          </div>
        ))}
      </div>

      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => {
            const prod = getProduct(item.id);
            return (
              <li key={item.id}>
                {item.quantity}x {prod.name} - ${prod.price * item.quantity}
              </li>
            );
          })}
        </ul>
      )}
      <p>Total: ${total}</p>
      <button onClick={() => navigate("/checkout")} disabled={cart.length === 0}>
        Continue Checkout
      </button>
    </div>
  );
}