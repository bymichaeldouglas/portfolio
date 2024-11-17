// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          Built with 💻 and 🎨 by Michael | © {new Date().getFullYear()}
        </p>
        <div className="space-x-4">
          <a
            href="https://www.linkedin.com/in/michael-h-douglas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/bymichaeldouglas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500"
          >
            GitHub
          </a>
          <a
            href="mailto:michaeldouglas319@hotmail.com"
            className="hover:text-indigo-500"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
