import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import BooksContext from "../context/BooksContext";

function CheckOut() {
  const [orders, setOrders] = useContext(OrderContext);
//   console.log(orders);

  const [books] = useContext(BooksContext);

  const resetOrders = () => {
    return setOrders({});
  };

  return (
    <>
      <p>One step closer to obtain the book</p>
      {/* i obtained object entries flow idea from AI, since I have no clue anymore
       to mapping my orders and unify the orders  */}

       <div className="order-container">



      {orders &&
        Object.entries(orders).map(([bookId, count]) => {
          // Find the book with the matching ID in the books array
          // parse bookId to an integer before comparing it with the book's id
          const book = books.find((book) => book.id === parseInt(bookId));

          return (
            <div key={bookId} >
              <img
                src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
                alt={book.title}
              />
              <p>Book Title: {book.title}</p>
              <p>Quantity: {count}</p>
            </div>
          );
        })}

            </div>
      <button onClick={resetOrders}>Reset order</button>
    </>
  );
}

export default CheckOut;
