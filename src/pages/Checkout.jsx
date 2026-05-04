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
    <div style={styles.page}>
      <div style={styles.card}>
        <button style={styles.backBtn} onClick={() => navigate("/cart")}>
          ← Back to Cart
        </button>

        <h1 style={styles.title}>Checkout</h1>
        <p style={styles.subtitle}>
          Enter your details to complete the purchase
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Street, City, ZIP"
              value={formData.address}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+355..."
                value={formData.phone}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
          </div>

          <button type="submit" style={styles.payBtn}>
            Pay with Card
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },
  backBtn: {
    background: "none",
    border: "none",
    color: "#667eea",
    cursor: "pointer",
    marginBottom: "10px",
    fontSize: "14px",
  },
  title: {
    marginBottom: "5px",
  },
  subtitle: {
    color: "#666",
    marginBottom: "20px",
    fontSize: "14px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  row: {
    display: "flex",
    gap: "10px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    fontSize: "14px",
  },
  input: {
    marginTop: "5px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
    transition: "0.2s",
  },
  payBtn: {
    marginTop: "10px",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#667eea",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.2s",
  },
};
