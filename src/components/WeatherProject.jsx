// src/components/WeatherProject.jsx
import React, { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi"; // Info icon from react-icons

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
      fetchWeather(defaultCoordinates.latitude, defaultCoordinates.longitude);
    }
  };

  // Use Geolocation API to get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationInfo({ latitude, longitude });
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
    <div className="flex items-center space-x-2">
      {/* Default Weather View (icon and temperature) */}
      {weather && (
        <div className="flex items-center">
          <img src={weather.icon} alt={weather.description} className="w-8 h-8" />
          <p className="ml-2 text-sm font-semibold">{weather.temp}°F</p>
        </div>
      )}

      {/* Info Icon to Show More Details */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        aria-label="Show detailed weather info"
        className="text-gray-600 hover:text-gray-800"
      >
        <FiInfo size={20} />
      </button>

      {/* Detailed Information */}
      {showDetails && (
        <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg p-4 shadow-lg w-64">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <>
              {locationInfo.city && locationInfo.country && (
                <p className="text-gray-600 mb-2">
                  Location: {locationInfo.city}, {locationInfo.country}
                </p>
              )}
              <p className="text-gray-600">
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
        </div>
      )}
    </div>
  );
};

export default WeatherProject;
