import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsSection from './components/ProjectsSection';
import Hero from "./components/Hero";
import WeatherFeatureDetails from "./pages/WeatherFeatureDetails";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Router>
        {/* Header is always visible */}
        <Header />
        <main>
          <Routes>
            {/* Home Page Route */}
            <Route
              path="/portfolio/"
              element={
                <>
                  <Hero />
                  <ProjectsSection />
                </>
              }
            />
            
            {/* Weather Feature Details Route */}
            <Route path="/weather-feature-details" element={<WeatherFeatureDetails />} />
          </Routes>
        </main>
        {/* Footer is always visible */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
