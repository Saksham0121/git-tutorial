import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MyApp</div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
