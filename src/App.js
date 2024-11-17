
import './App.css';

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsSection from './components/ProjectsSection';
import WeatherProject from  './components/WeatherProject';
import Hero from "./components/Hero";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <WeatherProject />
      </main>
      <Footer />
    </div>
  );
}

export default App;


