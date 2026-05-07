import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);

   
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regPassword2, setRegPassword2] = useState("");
  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!loginUsername || !loginPassword) {
      setLoginError("Please fill in all fields.");
      return;
    }
    if (loginUsername.length < 3) {
      setLoginError("Username must be at least 3 characters.");
      return;
    }
    if (loginPassword.length < 6) {
      setLoginError("Password must be at least 6 characters.");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setLoginError("No account found. Please register first.");
      return;
    }

    if (savedUser.username === loginUsername && savedUser.password === loginPassword) {
      setLoginError("");
      setLoginSuccess(true);
      localStorage.setItem("isLoggedIn", "true");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setLoginError("Incorrect username or password.");
    }
  };

  const handleRegister = () => {
    if (!regName || !regEmail || !regUsername || !regPassword || !regPassword2) {
      setRegError("Please fill in all fields.");
      return;
    }
    if (!regEmail.includes("@")) {
      setRegError("Please enter a valid email.");
      return;
    }
    if (regUsername.length < 3) {
      setRegError("Username must be at least 3 characters.");
      return;
    }
    if (regPassword.length < 6) {
      setRegError("Password must be at least 6 characters.");
      return;
    }
    if (regPassword !== regPassword2) {
      setRegError("Passwords do not match.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({
      name: regName,
      email: regEmail,
      username: regUsername,
      password: regPassword,
    }));

    setRegError("");
    setRegSuccess(true);
    setTimeout(() => {
      setIsRegistering(false);
      setRegSuccess(false); 
    }, 1500);
  };

  const containerStyle = {
    maxWidth: "400px",
    margin: "60px auto",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    border: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const inputStyle = {
    padding: "0.6rem 1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "bold",
  };

  const fieldStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
  };

  const loginButtonStyle = {
    padding: "0.7rem",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const outlineButtonStyle = {
    padding: "0.7rem",
    backgroundColor: "white",
    color: "#333",
    border: "1px solid #333",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  };

  
  if (!isRegistering) {
    return (
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>Login</h2>

        {loginError && (
          <p style={{ color: "red", backgroundColor: "#ffe5e5", padding: "0.5rem 1rem", borderRadius: "6px", fontSize: "14px", textAlign: "center" }}>
            {loginError}
          </p>
        )}

        {loginSuccess && (
          <p style={{ color: "green", backgroundColor: "#e5ffe5", padding: "0.5rem 1rem", borderRadius: "6px", fontSize: "14px", textAlign: "center" }}>
            Login successful! Redirecting... 🎉
          </p>
        )}

        <div style={fieldStyle}>
          <label style={labelStyle}>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            style={inputStyle}
          />
        </div>

        <button
          onClick={handleLogin}
          style={loginButtonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#333")}
        >
          Login
        </button>

        <p style={{ textAlign: "center", fontSize: "14px", color: "#666" }}>
          Don't have an account?{" "}
          <span
            onClick={() => setIsRegistering(true)}
            style={{ color: "#333", fontWeight: "bold", cursor: "pointer" }}
          >
            Register here
          </span>
        </p>
      </div>
    );
  }

  
  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>Register</h2>

      {regError && (
        <p style={{ color: "red", backgroundColor: "#ffe5e5", padding: "0.5rem 1rem", borderRadius: "6px", fontSize: "14px", textAlign: "center" }}>
          {regError}
        </p>
      )}

      {regSuccess && (
        <p style={{ color: "green", backgroundColor: "#e5ffe5", padding: "0.5rem 1rem", borderRadius: "6px", fontSize: "14px", textAlign: "center" }}>
          Account created! Redirecting to login... 🎉
        </p>
      )}

      <div style={fieldStyle}>
        <label style={labelStyle}>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={regName}
          onChange={(e) => setRegName(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={regEmail}
          onChange={(e) => setRegEmail(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Username</label>
        <input
          type="text"
          placeholder="Choose a username"
          value={regUsername}
          onChange={(e) => setRegUsername(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Password</label>
        <input
          type="password"
          placeholder="Choose a password"
          value={regPassword}
          onChange={(e) => setRegPassword(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Confirm Password</label>
        <input
          type="password"
          placeholder="Repeat your password"
          value={regPassword2}
          onChange={(e) => setRegPassword2(e.target.value)}
          style={inputStyle}
        />
      </div>

      <button
        onClick={handleRegister}
        style={loginButtonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#333")}
      >
        Register
      </button>

      <p style={{ textAlign: "center", fontSize: "14px", color: "#666" }}>
        Already have an account?{" "}
        <span
          onClick={() => setIsRegistering(false)}
          style={{ color: "#333", fontWeight: "bold", cursor: "pointer" }}
        >
          Login here
        </span>
      </p>
    </div>
  );
}