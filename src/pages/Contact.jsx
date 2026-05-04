import { useState } from "react";

import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message sent! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      {/* Hero Section */}
      <section style={{ textAlign: "center", paddingTop: "24px" }}>
        <p
          style={{
            color: "#4f46e5",
            fontWeight: "700",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Get in Touch
        </p>
        <h1
          style={{
            margin: "16px 0 0",
            fontSize: "clamp(2.2rem, 3vw, 3rem)",
          }}
        >
          We'd Love to Hear From You
        </h1>
        <p
          style={{
            color: "#64748b",
            margin: "16px auto 0",
            maxWidth: "600px",
            lineHeight: "1.75",
            fontSize: "1.08rem",
          }}
        >
          Have questions? Need assistance? Contact our team and we'll respond as
          quickly as possible.
        </p>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px",
        }}
      >
        {/* Contact Form */}
        <section>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gap: "20px",
              padding: "32px",
              borderRadius: "20px",
              background: "#f8fbff",
              border: "1px solid rgba(79, 70, 229, 0.1)",
            }}
          >
            <div style={{ display: "grid", gap: "6px" }}>
              <label
                htmlFor="name"
                style={{
                  fontWeight: "600",
                  color: "#0f172a",
                  fontSize: "0.95rem",
                }}
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                style={{
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(79, 70, 229, 0.2)",
                  fontSize: "1rem",
                  transition: "border-color 0.2s",
                }}
                required
              />
            </div>

            <div style={{ display: "grid", gap: "6px" }}>
              <label
                htmlFor="email"
                style={{
                  fontWeight: "600",
                  color: "#0f172a",
                  fontSize: "0.95rem",
                }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                style={{
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(79, 70, 229, 0.2)",
                  fontSize: "1rem",
                }}
                required
              />
            </div>

            <div style={{ display: "grid", gap: "6px" }}>
              <label
                htmlFor="subject"
                style={{
                  fontWeight: "600",
                  color: "#0f172a",
                  fontSize: "0.95rem",
                }}
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                style={{
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(79, 70, 229, 0.2)",
                  fontSize: "1rem",
                }}
                required
              />
            </div>

            <div style={{ display: "grid", gap: "6px" }}>
              <label
                htmlFor="message"
                style={{
                  fontWeight: "600",
                  color: "#0f172a",
                  fontSize: "0.95rem",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us more..."
                style={{
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(79, 70, 229, 0.2)",
                  fontSize: "1rem",
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
                required
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "14px 20px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#4f46e5",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "1rem",
                transition: "background-color 0.2s",
              }}
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              padding: "28px",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(14, 165, 233, 0.08))",
              border: "1px solid rgba(79, 70, 229, 0.1)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>📞</div>
            <h3
              style={{
                color: "#0f172a",
                marginBottom: "8px",
                fontSize: "1.2rem",
              }}
            >
              Phone
            </h3>
            <p
              style={{
                color: "#64748b",
                margin: 0,
                fontSize: "1rem",
              }}
            >
              +1 (555) 123-4567
            </p>
          </div>

          <div
            style={{
              padding: "28px",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(14, 165, 233, 0.08))",
              border: "1px solid rgba(79, 70, 229, 0.1)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>✉️</div>
            <h3
              style={{
                color: "#0f172a",
                marginBottom: "8px",
                fontSize: "1.2rem",
              }}
            >
              Email
            </h3>
            <p
              style={{
                color: "#64748b",
                margin: 0,
                fontSize: "1rem",
              }}
            >
              support@techstore.com
            </p>
          </div>

          <div
            style={{
              padding: "28px",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(14, 165, 233, 0.08))",
              border: "1px solid rgba(79, 70, 229, 0.1)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🕐</div>
            <h3
              style={{
                color: "#0f172a",
                marginBottom: "8px",
                fontSize: "1.2rem",
              }}
            >
              Hours
            </h3>
            <p
              style={{
                color: "#64748b",
                margin: 0,
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              Mon - Fri: 9am - 6pm
              <br />
              Sat - Sun: 10am - 4pm
            </p>
          </div>

          <div
            style={{
              padding: "28px",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(14, 165, 233, 0.08))",
              border: "1px solid rgba(79, 70, 229, 0.1)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>📍</div>
            <h3
              style={{
                color: "#0f172a",
                marginBottom: "8px",
                fontSize: "1.2rem",
              }}
            >
              Location
            </h3>
            <p
              style={{
                color: "#64748b",
                margin: 0,
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              123 Tech Avenue
              <br />
              Silicon Valley, CA 94025
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
