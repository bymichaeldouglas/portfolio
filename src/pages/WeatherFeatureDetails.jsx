// src/pages/WeatherFeatureDetails.jsx
import React from "react";

const WeatherFeatureDetails = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">API-Driven Weather and Location Feature</h1>
      <p className="mb-4">
        The weather feature on this page showcases an advanced integration of multiple APIs to dynamically provide users with relevant weather information based on their current location.
      </p>
      <h2 className="text-2xl font-bold mb-2">Key Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Geolocation API Integration:</strong> Obtains users' coordinates in real-time for accurate weather data.
        </li>
        <li>
          <strong>Fallback to IP-Based Location:</strong> Uses an IP-based geolocation service if users deny access or Geolocation API is unsupported.
        </li>
        <li>
          <strong>OpenWeatherMap API:</strong> Fetches detailed weather data based on latitude and longitude.
        </li>
        <li>
          <strong>Dynamic User Location Display:</strong> Shows location details like city and country regardless of how the location was obtained.
        </li>
        <li>
          <strong>Interactive UI with Detail Toggle:</strong> Users can expand details to see more about their current weather and location.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Technical Implementation</h2>
      <p>
        The system attempts to access the <strong>Geolocation API</strong> first to get accurate latitude and longitude coordinates. If the location cannot be obtained, an <strong>IP-based geolocation service</strong> is used. 
        Once coordinates are retrieved, the <strong>OpenWeatherMap API</strong> is used to fetch the weather details, and the UI dynamically updates to reflect the user's location. In the detailed view, users can always see their <strong>city</strong> and <strong>country</strong>, ensuring transparency.
      </p>
      <p className="mt-4">
        This integration highlights how multiple APIs can work together to provide a consistent, user-friendly experience that adapts based on the available data, ensuring robustness and resilience to different user settings.
      </p>
    </div>
  );
};

export default WeatherFeatureDetails;
