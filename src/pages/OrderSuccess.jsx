import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

export default function OrderSuccess() {
  const navigate = useNavigate();

  // optional: backend response store panninaal use pannalaam
  const order = JSON.parse(localStorage.getItem("order"));

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "25px",
        border: "1px solid #e5e7eb",
        borderRadius: "14px",
        textAlign: "center"
      }}
    >
      <h1 style={{ color: "#16a34a", marginBottom: "10px" }}>
        🎉 Order Placed Successfully!
      </h1>

      <p style={{ fontSize: "16px", marginBottom: "25px" }}>
        Thank you for shopping with us 📚  
        <br />
        Your order will be delivered soon.
      </p>

      <div
        style={{
          background: "#f9fafb",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "left"
        }}
      >
        <h3>📦 What happens next?</h3>
        <ul style={{ lineHeight: "1.8", marginTop: "10px" }}>
          <li>Your order is confirmed</li>
          <li>We are preparing your books</li>
          <li>Delivery partner will contact you</li>
          <li>Payment will be collected on delivery (if COD)</li>
        </ul>
      </div>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "25px",
          padding: "12px 24px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Back to Home
      </button>
    </div>
  );
}
