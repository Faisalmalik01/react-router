import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Links data for easier mapping
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/github", label: "Github" },
  ];

  // Close menu helper
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 lg:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="Logo"
            className="h-12 mr-3"
          />
        </Link>

        {/* Hamburger Button for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-800 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop menu links and buttons */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <ul className="flex space-x-8 font-medium text-gray-700">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `hover:text-orange-700 ${
                      isActive ? "text-orange-700" : ""
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex space-x-4 ml-8">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-4 py-2"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 text-white font-medium rounded-lg px-4 py-2"
            >
              Get started
            </Link>
          </div>
        </div>

        {/* Mobile full-screen menu overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center space-y-10 p-8 text-3xl font-semibold">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
              >
                {label}
              </NavLink>
            ))}

            <div className="flex flex-col space-y-6 mt-10 w-full max-w-xs">
              <Link
                to="#"
                onClick={closeMenu}
                className="block text-center text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg px-6 py-3"
              >
                Log in
              </Link>
              <Link
                to="#"
                onClick={closeMenu}
                className="block text-center bg-orange-700 hover:bg-orange-800 text-white rounded-lg px-6 py-3"
              >
                Get started
              </Link>
            </div>

            {/* Close button at top-right corner */}
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 text-gray-800 hover:text-orange-700 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
