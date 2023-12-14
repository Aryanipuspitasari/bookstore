import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext.jsx";
import BooksContext from "../context/BooksContext.jsx";
import OrderContext from "../context/OrderContext.jsx";

function Books() {
    const { inputName } = useContext(UserContext);
  const [books, setBooks] = useContext(BooksContext);
  const [orders, setOrders] = useContext(OrderContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://edwardtanguay.vercel.app/share/techBooks.json"
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          setBooks(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOrder = (bookId) => {
    setOrders((prevOrders) => ({
      ...prevOrders,
      [bookId]: (prevOrders[bookId] || 0) + 1,
    }));
  };

  const handleImageClick = (bookId) => {
    // console.log(`Image clicked for book ID: ${bookId}`);
  };

//   console.log("Books:", books); 
  return (
    <>
      <p>
        Hello, {inputName}, there are {books.length} books, which would you like
        to buy?
      </p>

      <div className="books-container">
        {Array.isArray(books) ? (
          books.map((book, index) => (
            <div key={index} className="book-item">
              <img
                // src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.image}`}

                src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
                alt={book.title}
                onClick={() => {
                  handleOrder(book.id);
                  handleImageClick(book.id);
                }}
              />
              <p className="book-title">{book.title}</p>
              {orders[book.id] && <p>Ordered {orders[book.id]}</p>}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Books;
