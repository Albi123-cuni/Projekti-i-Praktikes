
 import Footer from "../components/Footer";

export default function About() {
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
          About Our Store
        </p>
        <h1
          style={{
            margin: "16px 0 0",
            fontSize: "clamp(2.2rem, 3vw, 3rem)",
          }}
        >
          Quality Tech at Your Fingertips
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
          We're committed to bringing you the latest technology and gadgets with
          exceptional service and competitive prices.
        </p>
      </section>

      {/* Mission Section */}
      <section style={{ display: "flex", gap: "48px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <h2
            style={{
              color: "#0f172a",
              marginBottom: "16px",
              fontSize: "1.8rem",
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              color: "#475569",
              lineHeight: "1.8",
              fontSize: "1.05rem",
              marginBottom: "12px",
            }}
          >
            To make premium technology accessible to everyone. We curate the
            finest selection of electronics, accessories, and gadgets from
            trusted brands worldwide.
          </p>
          <p
            style={{
              color: "#475569",
              lineHeight: "1.8",
              fontSize: "1.05rem",
            }}
          >
            Our store combines ease of use with expert product knowledge to help
            you find exactly what you need.
          </p>
        </div>
        <div
          style={{
            flex: 1,
            height: "300px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(14, 165, 233, 0.15))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "4rem",
          }}
        >
          �
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2
          style={{
            color: "#0f172a",
            marginBottom: "32px",
            fontSize: "1.8rem",
            textAlign: "center",
          }}
        >
          Why Choose Us
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "28px",
          }}
        >
          {[
            {
              icon: "�",
              title: "Fast Shipping",
              description:
                "Quick and reliable delivery to get your products to you on time.",
            },
            {
              icon: "💵",
              title: "Best Prices",
              description:
                "Competitive pricing on all products with regular deals and discounts.",
            },
            {
              icon: "🔐",
              title: "Secure Payment",
              description:
                "Safe and encrypted transactions to protect your personal information.",
            },
            {
              icon: "📞",
              title: "Customer Support",
              description:
                "Dedicated team ready to help with any questions or concerns.",
            },
            {
              icon: "🔄",
              title: "Easy Returns",
              description:
                "Hassle-free return process within 30 days of purchase.",
            },
            {
              icon: "🏆",
              title: "Quality Guarantee",
              description:
                "All products are authentic and come with manufacturer warranty.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: "24px",
                borderRadius: "16px",
                background: "#f8fbff",
                border: "1px solid rgba(79, 70, 229, 0.1)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "12px" }}>
                {item.icon}
              </div>
              <h3
                style={{
                  color: "#0f172a",
                  marginBottom: "8px",
                  fontSize: "1.15rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          padding: "48px",
          borderRadius: "24px",
          background:
            "linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(14, 165, 233, 0.08))",
          border: "1px solid rgba(79, 70, 229, 0.1)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
            textAlign: "center",
          }}
        >
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "500+", label: "Products Available" },
            { number: "24/7", label: "Customer Support" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, idx) => (
            <div key={idx}>
              <p
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#4f46e5",
                  margin: "0 0 8px 0",
                }}
              >
                {stat.number}
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#64748b",
                  fontWeight: "500",
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          textAlign: "center",
          padding: "40px 24px",
          borderRadius: "20px",
          background: "#4f46e5",
          color: "white",
        }}
      >
        <h2
          style={{ color: "white", marginBottom: "12px", fontSize: "1.8rem" }}
        >
          Ready to Shop?
        </h2>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            lineHeight: "1.7",
            fontSize: "1.05rem",
            marginBottom: "24px",
          }}
        >
          Browse our full collection of premium tech products and find
          everything you need.
        </p>
        <a
          href="/store"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 32px",
            borderRadius: "10px",
            backgroundColor: "white",
            color: "#4f46e5",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1rem",
          }}
        >
          Visit Our Shop
        </a>
      </section>
      <Footer />
    </div>
  );
}
