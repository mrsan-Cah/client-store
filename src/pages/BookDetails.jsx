import { useParams, useNavigate } from "react-router-dom";
import sampleBooks from "../data/sampleBooks";
import "../styles/book.css";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = sampleBooks.find(b => b._id === parseInt(id));

  if (!book) return <p style={{ textAlign: "center", marginTop: "50px" }}>Book not found!</p>;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find(b => b._id === book._id);
    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({ ...book, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage")); // update header badge
    navigate("/cart");
  };

  return (
    <div className="details-container">
      <button onClick={() => navigate(-1)}>← Back</button>
      <div className="details-card">
        <img src={book.image} alt={book.title} />
        <div>
          <h2>{book.title}</h2>
          <p>by {book.author}</p>
          <p>{book.description}</p>
          <p>Price: ₹{book.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
