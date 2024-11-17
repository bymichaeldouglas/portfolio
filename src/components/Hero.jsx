// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-indigo-500">Michael</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Vision Engineering Technician | Innovator | Passionate about Data-Driven Quality
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-medium">
          View My Work
        </button>
      </div>
      {/* Optional Background Image */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
