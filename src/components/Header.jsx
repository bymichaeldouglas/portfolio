// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">
          <a href="#" className="hover:text-customHover">

            Michael's Portfolio
          </a>
        </div>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-customSecondaryHover">
            About
          </a>
          <a href="#projects" className="hover:text-indigo-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-indigo-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-indigo-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
