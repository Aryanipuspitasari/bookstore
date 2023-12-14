import { useContext } from "react";
import OrderContext from "../context/OrderContext";

function CheckOut() {
  const [orders] = useContext(OrderContext);

  return (
    <>
      <h3>Your Orders:</h3>
      {orders && Object.entries(orders).map(([bookId, count]) => (
        <p key={bookId}>Book ID: {bookId}, Quantity: {count}</p>
      ))}
    </>
  );
}

export default CheckOut;
