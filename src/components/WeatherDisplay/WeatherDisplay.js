import React from 'react';

function WeatherDisplay({ data }) {
  return (
    <div className="weather-info">
      <p>Location: {data.name}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Date & Time: {new Date().toLocaleString()}</p>
    </div>
  );
}

export default WeatherDisplay;
