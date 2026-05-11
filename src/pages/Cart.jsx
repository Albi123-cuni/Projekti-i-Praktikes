import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

import Footer from "../components/Footer";

export default function Cart() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [months, setMonths] = useState(1);

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
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
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
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const getCartItem = (id) =>
    cart.find((item) => item.id === id) || { quantity: 0 };

  const getProduct = (id) => products.find((p) => p.id === id);

  const total = cart.reduce((sum, item) => {
    const prod = getProduct(item.id);
    return sum + prod.price * item.quantity;
  }, 0);

  const totalOld = cart.reduce((sum, item) => {
    const prod = getProduct(item.id);
    return sum + prod.oldPrice * item.quantity;
  }, 0);

  const totalSaved = totalOld - total;

  const totalSavedPercent = totalOld
    ? Math.round((totalSaved / totalOld) * 100)
    : 0;

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (code === "SAVE10") {
      setDiscount(total * 0.1);
    } else if (code === "SAVE20") {
      setDiscount(total * 0.2);
    } else if (code === "FREESHIP") {
      setDiscount(15);
    } else {
      setDiscount(0);
      alert("Invalid coupon");
    }
  };

  const interestRate = 0.12;

  const subtotalAfterDiscount = total - discount;

  const financedTotal =
    months > 1
      ? subtotalAfterDiscount * (1 + interestRate)
      : subtotalAfterDiscount;

  const monthlyPayment = financedTotal / months;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Cart</h1>

      <h2>Products</h2>

      <div style={styles.productsGrid}>
        {products.map((product) => {
          const quantity = getCartItem(product.id).quantity;

          const isMax = quantity >= product.stock;

          return (
            <div key={product.id} style={styles.card}>
              <img
                src={product.image}
                alt={product.name}
                style={styles.productImage}
              />

              <h3>{product.name}</h3>

              <p style={styles.priceRow}>
                <span>
                  <span style={styles.oldPrice}>${product.oldPrice}</span> / $
                  {product.price}
                </span>

                {product.oldPrice > product.price && (
                  <span style={styles.saveBadge}>
                    {Math.round(
                      ((product.oldPrice - product.price) / product.oldPrice) *
                        100,
                    )}
                    % save
                  </span>
                )}
              </p>

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
          );
        })}
      </div>

      <div style={styles.cartBox}>
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul style={styles.cartList}>
            {cart.map((item) => {
              const prod = getProduct(item.id);

              return (
                <li key={item.id} style={styles.cartItem}>
                  <div style={styles.cartLeft}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={styles.cartImage}
                    />

                    <span>
                      {item.quantity}x {prod.name}
                    </span>
                  </div>

                  <div style={styles.cartRight}>
                    <div>${(prod.price * item.quantity).toFixed(2)}</div>

                    <div style={styles.savedText}>
                      Saved: $
                      {((prod.oldPrice - prod.price) * item.quantity).toFixed(
                        2,
                      )}{" "}
                      (
                      {Math.round(
                        ((prod.oldPrice - prod.price) / prod.oldPrice) * 100,
                      )}
                      %)
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <div style={styles.section}>
          <h3>Coupon</h3>

          <div style={styles.couponRow}>
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              style={styles.input}
            />

            <button onClick={applyCoupon} style={styles.applyBtn}>
              Apply
            </button>
          </div>

          {discount > 0 && (
            <p style={styles.discountText}>
              Discount Applied: ${discount.toFixed(2)}
            </p>
          )}
        </div>

        <div style={styles.section}>
          <p style={styles.totalRow}>
            <span>
              <span style={styles.oldPrice}>${totalOld.toFixed(2)}</span> /{" "}
              <strong>${subtotalAfterDiscount.toFixed(2)}</strong>
            </span>

            <span style={styles.saveTotal}>
              You save ${(totalSaved + discount).toFixed(2)} (
              {totalSavedPercent}%)
            </span>
          </p>

          <h3>Pay Monthly</h3>

          <select
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            style={styles.select}
          >
            <option value={1}>Pay Full</option>
            <option value={3}>3 Months</option>
            <option value={6}>6 Months</option>
            <option value={12}>12 Months</option>
          </select>

          {months > 1 && (
            <div style={{ marginTop: "10px" }}>
              <p>Interest Rate: 12%</p>
              {/* 
              <p>
                Monthly Payment: <strong>${monthlyPayment.toFixed(2)}</strong>
              </p>

              <p>
                Total with Interest:{" "}
                <strong>${financedTotal.toFixed(2)}</strong>
              </p> */}
            </div>
          )}
        </div>

        <div style={styles.totalBox}>
          {months > 1 && (
            <div style={styles.financeSummary}>
              <p>
                Financing Total: <strong>${financedTotal.toFixed(2)}</strong>
              </p>

              <p>
                {months} monthly payments of{" "}
                <strong>${monthlyPayment.toFixed(2)}</strong>
              </p>
            </div>
          )}
        </div>

        <button
          style={{
            ...styles.checkoutBtn,
            ...(cart.length === 0 ? styles.buttonDisabled : {}),
          }}
          disabled={cart.length === 0}
          onClick={() =>
            navigate("/checkout", {
              state: {
                total: financedTotal,
                subtotal: subtotalAfterDiscount,
                discount,
                months,
                monthlyPayment,
                interestRate,
                cartItems: cart.map((item) => {
                  const prod = getProduct(item.id);

                  return {
                    id: item.id,
                    name: prod.name,
                    price: prod.price,
                    quantity: item.quantity,
                  };
                }),
              },
            })
          }
        >
          Continue Checkout
        </button>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    backgroundColor: "#fafafa",
  },

  title: {
    marginBottom: "10px",
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
    width: "220px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  productImage: {
    width: "100%",
    borderRadius: "10px",
  },

  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  oldPrice: {
    textDecoration: "line-through",
    color: "red",
  },

  saveBadge: {
    color: "green",
    fontWeight: "600",
  },

  controls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },

  button: {
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    padding: "4px 10px",
    margin: "0 2px",
    cursor: "pointer",
    borderRadius: "8px",
  },

  buttonDisabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  cartBox: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#fff",
    border: "1px solid #e5e5e5",
    borderRadius: "10px",
  },

  cartList: {
    listStyle: "none",
    padding: 0,
  },

  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },

  cartLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  cartRight: {
    textAlign: "right",
  },

  cartImage: {
    width: "40px",
    height: "40px",
    objectFit: "cover",
    borderRadius: "6px",
  },

  savedText: {
    fontSize: "12px",
    color: "green",
    fontWeight: "600",
  },

  section: {
    marginTop: "25px",
    paddingTop: "15px",
    borderTop: "1px solid #eee",
  },

  couponRow: {
    display: "flex",
    gap: "10px",
  },

  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },

  applyBtn: {
    padding: "10px 14px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  discountText: {
    marginTop: "10px",
    color: "green",
    fontWeight: "600",
  },

  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  totalBox: {
    marginTop: "20px",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  saveTotal: {
    color: "green",
    fontWeight: "700",
  },

  financeSummary: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
  },

  checkoutBtn: {
    marginTop: "20px",
    padding: "12px 18px",
    border: "none",
    backgroundColor: "#111",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "8px",
    fontWeight: "600",
    width: "100%",
  },
};
