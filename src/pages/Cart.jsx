import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import products from "../data/products"

export default function Cart() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart")
      return savedCart ? JSON.parse(savedCart) : []
    } catch (error) {
      return []
    }
  })
  const navigate = useNavigate()

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart))
    } catch (error) {
      console.error("Unable to save cart to localStorage", error)
    }
  }, [cart])

  const addToCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id)
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      } else {
        return [...prev, { id, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const getCartItem = (id) =>
    cart.find((item) => item.id === id) || { quantity: 0 }

  const getProduct = (id) => products.find((p) => p.id === id)

  const total = cart.reduce((sum, item) => {
    const prod = getProduct(item.id)
    return sum + prod.price * item.quantity
  }, 0)

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Cart</h1>
      <h2>Products</h2>

      <div style={styles.productsGrid}>
        {products.map((product) => {
          const quantity = getCartItem(product.id).quantity
          const isMax = quantity >= product.stock

          return (
            <div key={product.id} style={styles.card}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%" }}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>Stock: {product.stock}</p>

              <div style={styles.controls}>
                <div>
                  <button
                    style={{
                      ...styles.button,
                      ...(quantity === 0 ? styles.buttonDisabled : {}),
                    }}
                    onClick={() => removeFromCart(product.id)}
                    disabled={quantity === 0}
                  >
                    -
                  </button>

                  <button
                    style={{
                      ...styles.button,
                      ...(isMax ? styles.buttonDisabled : {}),
                    }}
                    onClick={() => addToCart(product.id)}
                    disabled={isMax}
                  >
                    +
                  </button>
                </div>

                <span>added: {quantity}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div style={styles.cartBox}>
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => {
              const prod = getProduct(item.id)
              return (
                <li key={item.id}>
                  {item.quantity}x {prod.name} - ${prod.price * item.quantity}
                </li>
              )
            })}
          </ul>
        )}

        <p>
          <strong>Total: ${total}</strong>
        </p>

        <button
          style={{
            ...styles.checkoutBtn,
            ...(cart.length === 0 ? styles.buttonDisabled : {}),
          }}
          onClick={() => navigate("/checkout")}
          disabled={cart.length === 0}
        >
          Continue Checkout
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    backgroundColor: "#fafafa",
  },

  productsGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
  },

  card: {
    backgroundColor: "#fff",
    border: "1px solid #e5e5e5",
    borderRadius: "12px",
    padding: "12px",
    width: "200px",
  },

  controls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "8px",
  },

  button: {
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    padding: "4px 8px",
    margin: "0 2px",
    cursor: "pointer",
    borderRadius: "10px",
  },

  buttonDisabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  cartBox: {
    marginTop: "25px",
    padding: "15px",
    backgroundColor: "#fff",
    border: "1px solid #e5e5e5",
    borderRadius: "6px",
  },

  checkoutBtn: {
    marginTop: "10px",
    padding: "6px 12px",
    border: "1px solid #333",
    backgroundColor: "#333",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px",
  },
}
