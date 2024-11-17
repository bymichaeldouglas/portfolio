// src/components/WeatherProject.jsx
import React, { useEffect, useState } from "react";

const WeatherProject = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch weather data using latitude and longitude
  const fetchWeather = async (lat, lon) => {
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY; // Securely access the API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
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
  

  // Use Geolocation API to get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchWeather(latitude, longitude);
        },
        (err) => {
          console.error("Error getting location:", err);
          setError("Location access denied. Unable to fetch weather data.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold mb-2">Weather-Based User Experience</h3>
      <p className="text-gray-600 mb-4">
        This project demonstrates the use of the browser's Geolocation API to fetch and display weather data dynamically.
      </p>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : weather ? (
        <div className="flex items-center space-x-4">
          <img src={weather.icon} alt={weather.description} className="w-12 h-12" />
          <div>
            <h4 className="text-lg font-bold">{weather.city}</h4>
            <p className="text-sm">{weather.description}</p>
            <p className="text-lg font-semibold">{weather.temp}°C</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Fetching your location and weather data...</p>
      )}
    </div>
  );
};

export default WeatherProject;
