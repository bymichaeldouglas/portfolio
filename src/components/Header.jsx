// src/components/Header.jsx
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and Close icons from react-icons
import { Link } from "react-router-dom"; // Import Link from React Router
import WeatherProject from "./WeatherProject";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Title */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-indigo-400">
            Michael's Portfolio
          </Link>
        </div>

        {/* Right Section for Small Screens: Weather + Hamburger Icon */}
        <div className="flex items-center space-x-4 md:hidden">
          <WeatherProject />
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="text-gray-300 hover:text-white"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links (visible on medium and larger screens) */}
        <nav className="hidden md:flex items-center space-x-4 ml-auto">
          <Link to="/#about" className="hover:text-indigo-400">
            About
          </Link>
          <Link to="/#projects" className="hover:text-indigo-400">
            Projects
          </Link>
          <Link to="/#skills" className="hover:text-indigo-400">
            Skills
          </Link>
          <Link to="/#contact" className="hover:text-indigo-400">
            Contact
          </Link>
          {/* Weather Component (visible on medium and larger screens, furthest right) */}
          <WeatherProject />
        </nav>

        {/* Dropdown Menu (visible on small screens when toggled) */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 text-white shadow-lg md:hidden">
            <nav className="flex flex-col items-start space-y-4 p-4">
              <Link to="/#about" className="hover:text-indigo-400" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/#projects" className="hover:text-indigo-400" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link to="/#skills" className="hover:text-indigo-400" onClick={() => setIsOpen(false)}>
                Skills
              </Link>
              <Link to="/#contact" className="hover:text-indigo-400" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
