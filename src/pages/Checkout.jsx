import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const { total, discount, months, monthlyPayment, interestRate, cartItems } =
    location.state || {
      total: 0,
      discount: 0,
      months: 0,
      monthlyPayment: 0,
      interestRate: 0,
      cartItems: [],
    };

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    postalCode: "",
  });

  const safeTotal = Number(total) || 0;
  const safeDiscount = Number(discount) || 0;
  const safeMonthly = Number(monthlyPayment) || 0;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <button style={styles.backBtn} onClick={() => navigate("/cart")}>
          ← Back
        </button>

        <h2 style={styles.title}>Checkout</h2>

        <form style={styles.form}>
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            style={styles.input}
          />
        </form>

        <div style={styles.summary}>
          <h3 style={{ marginBottom: "15px" }}>Payment Summary</h3>

          <div style={styles.summaryRow}>
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div style={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${(safeTotal + safeDiscount).toFixed(2)}</span>
          </div>

          <div style={styles.summaryRow}>
            <span>Discount</span>
            <span style={{ color: "green" }}>-${safeDiscount.toFixed(2)}</span>
          </div>

          <div style={styles.summaryRow}>
            <span>Interest Rate</span>
            <span>{interestRate}%</span>
          </div>

          <div style={styles.summaryRow}>
            <span>Installment Plan</span>
            <span>{months} Months</span>
          </div>

          <div style={styles.summaryRow}>
            <span>Monthly Payment</span>
            <span style={{ color: "#0070ba", fontWeight: "bold" }}>
              ${safeMonthly.toFixed(2)}
            </span>
          </div>

          <hr style={{ margin: "15px 0" }} />

          <div style={styles.summaryRow}>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>Total</span>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              ${safeTotal.toFixed(2)}
            </span>
          </div>
        </div>

        <div style={styles.cartBox}>
          <h3 style={{ marginBottom: "10px" }}>Order Items</h3>

          {cartItems.map((item, index) => (
            <div key={index} style={styles.item}>
              <div>
                <p style={styles.itemName}>{item.name}</p>
                <p style={styles.itemQty}>Qty: {item.quantity}</p>
              </div>
              <p style={styles.itemPrice}>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "25px" }}>
          <h3 style={{ marginBottom: "15px" }}>Subscribe with PayPal</h3>

          <PayPalButtons
            style={{ layout: "vertical" }}
            forceReRender={[total]}
            createOrder={(data, actions) => {
              const itemsTotal = cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0,
              );
              const interestAmount = safeTotal - itemsTotal + safeDiscount;

              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: safeTotal.toFixed(2),
                      breakdown: {
                        item_total: {
                          currency_code: "USD",
                          value: itemsTotal.toFixed(2),
                        },
                        discount: {
                          currency_code: "USD",
                          value: safeDiscount.toFixed(2),
                        },
                        handling: {
                          currency_code: "USD",
                          value: interestAmount.toFixed(2),
                        },
                      },
                    },
                    items: cartItems.map((item) => ({
                      name: item.name,
                      quantity: String(item.quantity),
                      unit_amount: {
                        currency_code: "USD",
                        value: Number(item.price).toFixed(2),
                      },
                    })),
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              try {
                const details = await actions.order.capture();

                console.log(details);

                alert(
                  `Transaction completed by ${details.payer.name.given_name}`,
                );

                navigate("/");
              } catch (err) {
                console.error("Capture error:", err);
                alert("Payment capture failed");
              }
            }}
            onError={(err) => {
              console.error("PayPal Error:", err);
              alert("PayPal payment failed");
            }}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f3f4f6",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  box: {
    width: "100%",
    maxWidth: "520px",
    background: "#fff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },
  backBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    marginBottom: "10px",
    color: "#555",
    fontSize: "14px",
  },
  title: {
    marginBottom: "20px",
    fontSize: "28px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    outline: "none",
  },
  summary: {
    marginTop: "25px",
    background: "#f9fafb",
    padding: "18px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontSize: "15px",
  },
  cartBox: {
    marginTop: "25px",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "15px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
  itemName: {
    margin: 0,
    fontWeight: "bold",
  },
  itemQty: {
    margin: 0,
    color: "#666",
    fontSize: "13px",
  },
  itemPrice: {
    fontWeight: "bold",
  },
  loading: {
    marginTop: "20px",
    textAlign: "center",
    color: "#0070ba",
    fontWeight: "bold",
  },
};
