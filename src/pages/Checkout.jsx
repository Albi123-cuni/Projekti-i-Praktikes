  import {  useState } from "react";
  import { useNavigate, useLocation } from "react-router-dom";
  import Footer from "../components/Footer";
  import { PayPalButtons } from "@paypal/react-paypal-js";

  export default function Checkout() {
    const navigate = useNavigate();
    const location = useLocation();
    const total = location.state || 0;
    const [formData, setFormData] = useState({
      name: "",
      address: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      postalCode: "",
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Payment processed!");
    };
console.log(total);
console.log(typeof total);
    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <button style={styles.backBtn} onClick={() => navigate("/cart")}>
            ← Back
          </button>

          <h2 style={styles.title}>Checkout</h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              type="text"
              name="state"
              placeholder="Shteti"
              value={formData.state}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              type="text"
              name="city"
              placeholder="Qyteti"
              value={formData.city}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              type="text"
              name="postalCode"
              placeholder="Kodi Postal"
              value={formData.postalCode}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <button type="submit" style={styles.button}>
              Pay - ${total}
            </button>
          </form>
          <h3>Or pay with PayPal</h3>

   <PayPalButtons
  style={{ layout: "vertical" }}
  forceReRender={[total]}

  createOrder={(data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: Number(total).toFixed(2),
          },
        ],
      });
    }}

   

  onApprove={async (data, actions) => {
    try {
      const details = await actions.order.capture();

      console.log(details);

      alert(
        `Transaction completed by ${details.payer.name.given_name}`
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
    );
  }     

  const styles = {
    container: {
      minHeight: "101vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5",
      fontFamily: "Arial, sans-serif",
    },
    box: {
      background: "#fff",
      padding: "25px",
      borderRadius: "8px",
      width: "100%",
      maxWidth: "400px",
      border: "1px solid #ddd",
    },
    backBtn: {
      background: "none",
      border: "none",
      cursor: "pointer",
      marginBottom: "10px",
      fontSize: "14px",
    },
    title: {
      marginBottom: "15px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    button: {
      marginTop: "10px",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      background: "#333",
      color: "#fff",
      cursor: "pointer",
    },
  };
