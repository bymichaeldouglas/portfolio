import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsSection from './components/ProjectsSection';
import Hero from "./components/Hero";
import WeatherFeatureDetails from "./pages/WeatherFeatureDetails";
import JqTt from "./pages/JqTt";


function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Router>
        <Header />
        <main style={{ marginTop: headerHeight }}>
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
            <Route path="/jq-tt" element={<JqTt/>}/>
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
