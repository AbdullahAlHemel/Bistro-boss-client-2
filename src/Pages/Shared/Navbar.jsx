import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import UseCart from "../../Hooks/UseCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCart();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  };

  const navOptions = (
    <>
      <li>
        <Link to="/" className="transition-colors hover:text-red-500">
          Home
        </Link>
      </li>
      <li>
        <Link to="/menu" className="transition-colors hover:text-red-500">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to="/order/salad" className="transition-colors hover:text-red-500">
          Order
        </Link>
      </li>
      <li>
        <Link to="/secret" className="transition-colors hover:text-red-500">
          Secret
        </Link>
      </li>
      <li>
        <Link to="/dashboard/cart" className="relative flex items-center transition-colors hover:text-red-500">
          <BsCartFill className="text-2xl" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 rounded-full">
              +{cart.length}
            </span>
          )}
        </Link>
      </li>
      {user ? (
        <li>
          <button
            onClick={handleLogOut}
            className="transition-colors hover:text-red-500 font-semibold"
          >
            LogOut
          </button>
        </li>
      ) : (
        <li>
          <Link to="/login" className="transition-colors hover:text-red-500 font-semibold">
            LogIn
          </Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="navbar max-w-6xlrou fixed z-10 w-full bg-black bg-opacity-40 backdrop-blur-md text-white shadow-md">
      <div className="navbar-start px-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-black bg-opacity-80 rounded-lg w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-bold text-red-500 hover:text-white">
          Bistro Boss
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex px-4">
        <ul className="menu menu-horizontal px-1 space-x-4">{navOptions}</ul>
      </div>

      <div className="navbar-end px-4">
        <Link
          to="/contact"
          className="btn bg-red-500 hover:bg-red-600 text-white transition-colors font-semibold"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
