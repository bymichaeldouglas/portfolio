// src/components/WeatherProject.jsx
import React, { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi"; // Info icon from react-icons
import { Link } from "react-router-dom";

const WeatherProject = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [locationInfo, setLocationInfo] = useState({
    latitude: null,
    longitude: null,
    city: null,
    country: null,
  });
  const [showDetails, setShowDetails] = useState(false); // State to toggle detailed view

  const defaultCoordinates = { latitude: 38.9072, longitude: -77.0369 }; // Washington, DC

  // Function to fetch weather data using latitude and longitude
  const fetchWeather = async (lat, lon) => {
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
      );
      const data = await response.json();
      setWeather({
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        city: data.name,
      });
      // Update locationInfo with city data if available
      setLocationInfo((prevLocationInfo) => ({
        ...prevLocationInfo,
        city: data.name,
      }));
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Failed to fetch weather data. Please try again later.");
    }
  };

  // Function to fetch IP-based geolocation data
  const fetchIPLocation = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/"); // Example IP geolocation service
      const data = await response.json();
      setLocationInfo({
        latitude: data.latitude,
        longitude: data.longitude,
        city: data.city,
        country: data.country_name,
      });
      fetchWeather(data.latitude, data.longitude);
    } catch (err) {
      console.error("Error fetching IP-based location:", err);
      setError("Unable to determine location via IP. Defaulting to Washington, DC.");
      // Set default location info for Washington, DC
      setLocationInfo({
        latitude: defaultCoordinates.latitude,
        longitude: defaultCoordinates.longitude,
        city: "Washington",
        country: "United States",
      });
      fetchWeather(defaultCoordinates.latitude, defaultCoordinates.longitude);
    }
  };

  // Use Geolocation API to get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationInfo((prevLocationInfo) => ({
            ...prevLocationInfo,
            latitude,
            longitude,
          }));
          fetchWeather(latitude, longitude);
        },
        (err) => {
          console.error("Error getting location:", err);
          setError("Location access denied. Attempting IP-based location.");
          fetchIPLocation();
        }
      );
    } else {
      setError("Geolocation is not supported by your browser. Attempting IP-based location.");
      fetchIPLocation();
    }
  }, []);

  return (
    <div className="relative flex items-center space-x-2">
      {/* Default Weather View (icon and temperature) */}
      {weather && (
        <div className="flex items-center">
          <img src={weather.icon} alt={weather.description} className="w-6 h-6" />
          <p className="ml-2 text-sm font-semibold text-white-600 hover:text-white-800">
            {weather.temp}°F
          </p>
        </div>
      )}

      {/* Info Icon to Show More Details */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        aria-label="Show detailed weather info"
        className="text-gray-600 hover:text-gray-800 ml-2"
      >
        <FiInfo size={16} />
      </button>

      {/* Detailed Information Popup */}
      {showDetails && (
        <div className="absolute top-10 left-0 bg-gray-800 text-white border border-gray-500 rounded-lg p-4 shadow-lg w-64 z-50">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <>
              {locationInfo.city && locationInfo.country && (
                <p className="text-gray-300 mb-2">
                  Location: {locationInfo.city}, {locationInfo.country}
                </p>
              )}
              <p className="text-gray-300">
                {weather ? (
                  <>
                    <strong>Weather:</strong> {weather.description}
                  </>
                ) : (
                  "Fetching your location and weather data..."
                )}
              </p>
            </>
          )}
          <Link to="/weather-feature-details" className="hover:text-indigo-400">
             Weather Feature Details
          </Link>

        </div>
      )}
      
    </div>
  );
};

export default WeatherProject;
