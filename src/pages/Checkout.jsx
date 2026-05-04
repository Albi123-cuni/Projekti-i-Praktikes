import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment processed!");
  };

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

          <button type="submit" style={styles.button}>
            Pay
          </button>
        </form>
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
