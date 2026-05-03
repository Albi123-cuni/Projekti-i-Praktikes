import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      setSuccess(false);
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      setSuccess(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setSuccess(false);
      return;
    }

    // Get saved user from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("No account found. Please register first.");
      setSuccess(false);
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      setError("");
      setSuccess(true);
      console.log("Login successful!");
    } else {
      setError("Incorrect email or password.");
      setSuccess(false);
    }
  };

  const handleRegister = () => {
    if (!email || !password) {
      setError("Please fill in all fields to register.");
      return;
    }
    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }));
    setError("");
    alert(`Account created for ${email}! You can now login.`);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "60px auto",
        padding: "2rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
        border: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>Login</h2>

      {error && (
        <p
          style={{
            color: "red",
            backgroundColor: "#ffe5e5",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {error}
        </p>
      )}

      {success && (
        <p
          style={{
            color: "green",
            backgroundColor: "#e5ffe5",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          Login successful! Welcome back 🎉
        </p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        <label style={{ fontSize: "14px", fontWeight: "bold" }}>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "0.6rem 1rem",
            borderRadius: "6px",
            border: error && !email ? "1px solid red" : "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        <label style={{ fontSize: "14px", fontWeight: "bold" }}>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "0.6rem 1rem",
            borderRadius: "6px",
            border: error && !password ? "1px solid red" : "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </div>

      <button
        onClick={handleLogin}
        style={{
          padding: "0.7rem",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#333")}
      >
        Login
      </button>

      <button
        onClick={handleRegister}
        style={{
          padding: "0.7rem",
          backgroundColor: "white",
          color: "#333",
          border: "1px solid #333",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#eee")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
      >
        Register
      </button>
    </div>
  );
}