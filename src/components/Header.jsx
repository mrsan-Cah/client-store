import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [cartCount, setCartCount] = useState(0);
  const [pop, setPop] = useState(false);

  // Update cart count and trigger pop animation
  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = storedCart.reduce((acc, item) => acc + (item.quantity || 1), 0);

      // Trigger pop if count increased
      if (count > cartCount) {
        setPop(true);
        setTimeout(() => setPop(false), 300);
      }

      setCartCount(count);
    };

    updateCart();

    // Listen for changes in other tabs
    const handleStorage = () => updateCart();
    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, [cartCount]);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleProtectedClick = (e, path) => {
    if (!user) {
      e.preventDefault();
      alert("Please login to view this page");
    } else {
      navigate(path);
    }
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 30px",
        backgroundColor: "#ff6f61",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo */}
      <h2
        style={{
          margin: 0,
          cursor: "pointer",
          fontSize: "1.6rem",
          fontWeight: 700,
          letterSpacing: "1px",
        }}
        onClick={(e) => handleProtectedClick(e, "/")}
      >
        📚 Online Bookstore
      </h2>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        {/* Home */}
        <span
          onClick={(e) => handleProtectedClick(e, "/")}
          style={{
            cursor: "pointer",
            color: "#fff",
            fontWeight: 600,
            padding: "6px 12px",
            borderRadius: "6px",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "rgba(255,255,255,0.2)")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
        >
          Home
        </span>

        {/* Cart with animated badge */}
        <span
          onClick={(e) => handleProtectedClick(e, "/cart")}
          style={{
            position: "relative",
            cursor: "pointer",
            color: "#fff",
            fontWeight: 600,
            padding: "6px 12px",
            borderRadius: "6px",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "rgba(255,255,255,0.2)")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
        >
          Cart
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-10px",
                backgroundColor: "#ff3b2e",
                color: "#fff",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                transform: pop ? "scale(1.5)" : "scale(1)",
                transition: "transform 0.3s",
              }}
            >
              {cartCount}
            </span>
          )}
        </span>

        {/* User Section */}
        {user ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#fff",
              color: "#ff6f61",
              padding: "6px 12px",
              borderRadius: "8px",
              fontWeight: 600,
            }}
          >
            <span>Hello, {user.name || "User"}</span>
            <button
              onClick={logout}
              style={{
                backgroundColor: "#ff6f61",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "4px 10px",
                cursor: "pointer",
                fontWeight: 600,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
              onMouseLeave={(e) => (e.target.style.opacity = 1)}
            >
              Logout
            </button>
          </div>
        ) : (
          <span
            onClick={() => navigate("/login")}
            style={{
              cursor: "pointer",
              padding: "6px 15px",
              backgroundColor: "#fff",
              color: "#ff6f61",
              borderRadius: "8px",
              fontWeight: 600,
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            Login
          </span>
        )}
      </nav>
    </header>
  );
}
