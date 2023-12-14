// import Welcome from "./Welcome.jsx";
import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <>
      <h1>Bookstore</h1>
      <nav>
      <Link to="/welcome">Welcome</Link>
      <Link to="/books">Books</Link>
      <Link to="/checkout">Checkout</Link>
      
      </nav>

      <Outlet />
    </>
  );
}



export default Navigation