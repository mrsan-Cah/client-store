export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #ff6f61, #ff3b2e)",
        color: "#fff",
        padding: "30px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        textAlign: "center",
        boxShadow: "0 -6px 15px rgba(0,0,0,0.15)",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        marginTop: "auto",
      }}
    >
      {/* Footer Text */}
      <p style={{ margin: "5px 0", fontWeight: 700, fontSize: "1rem" }}>
        © 2026 Online Bookstore
      </p>
      <p style={{ margin: "5px 0", fontSize: "0.95rem" }}>
        Contact:{" "}
        <a
          href="mailto:bookstore@gmail.com"
          style={{
            color: "#fff",
            textDecoration: "underline",
            fontWeight: 500,
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          bookstore@gmail.com
        </a>
      </p>

      {/* Divider */}
      <div
        style={{
          width: "80%",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.3)",
          margin: "10px 0",
        }}
      />

      {/* Social Icons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {[
          { icon: "🌐", label: "Website", action: () => alert("Website clicked") },
          { icon: "📘", label: "Facebook", action: () => alert("Facebook clicked") },
          { icon: "🐦", label: "Twitter", action: () => alert("Twitter clicked") },
        ].map((social, index) => (
          <button
            key={index}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
              padding: "10px",
              borderRadius: "50%",
              transition: "all 0.3s",
              boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.2)";
              e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 3px 6px rgba(0,0,0,0.2)";
            }}
            onClick={social.action}
            aria-label={social.label}
          >
            {social.icon}
          </button>
        ))}
      </div>
    </footer>
  );
}
