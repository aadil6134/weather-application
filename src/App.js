import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeather = async (location) => {
    const apiKey = '1ac388906f107b5b0f379012ab9604f2';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      alert('Location not found');
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {weatherData && <WeatherDisplay data={weatherData} />}
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </div>
  );
}

export default App;
