
import './App.css';

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsSection from './components/ProjectsSection';
import Hero from "./components/Hero";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;


