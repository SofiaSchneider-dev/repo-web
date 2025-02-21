import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = ({ setLoggedin }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setLoggedin(false); 
    navigate("/"); 
  };

  return (
    <header className="bg-fondo text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-6">
            <li>
                <Link to="/loggedin" className="hover:text-green-400">Home</Link>
            </li>
            <li>
                <Link to="/about" className="hover:text-green-400">About</Link>
            </li>
            <li>
                <Link to="/menu" className="hover:text-green-400">Menu</Link>
            </li>
            <li>
                <Link to="/contact" className="hover:text-green-400">Contact</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleSignOut}
          className="bg-red-700 px-4 py-2 rounded-md hover:bg-red-500"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;