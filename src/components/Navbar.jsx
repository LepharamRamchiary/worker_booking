import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Worker Booking</a>
        <button
          className="sm:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            // xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <ul
          className={`sm:flex md:flex md:flex-row flex flex-col items-center justify-center md:space-x-4  sm:space-x-4 sm:static absolute sm:w-auto w-full sm:p-0 p-4 sm:mt-0 transition-transform ${
            isOpen ? "top-16 left-0" : "-top-96"
          } bg-blue-500 sm:bg-transparent`}
        >
          <li>
            <a href="/" className="block hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="block hover:underline">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/register" className="block hover:underline">
              Register
            </a>
          </li>
          <li>
            <a href="/login" className="block hover:underline">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
