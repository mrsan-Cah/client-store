// BookCard.jsx
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">by {book.author}</p>
      <p className="book-price">₹{book.price}</p>
      <Link to={`/books/${book._id}`} className="auth-button">
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
