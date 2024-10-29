import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hae säädata Grazista OpenWeatherMapista
    const fetchWeather = async () => {
      const apiKey = '183bd3d9d8ccc2d32a2431198b14f536'; // Korvaa tämä omalla OpenWeatherMap API-avaimellasi
      const city = 'Graz';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error("Virhe säädatan haussa:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {return <p>Ladataan säätietoja...</p>;}

  if (!weatherData) {return <p>Virhe säädatan hakemisessa.</p>;}
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <div className="weather">
      <h2>Sää Grazissa</h2>
      <img src={iconUrl} alt="Sään kuvake" className="weather-icon" />
      <p>Lämpötila: {weatherData.main.temp} °C</p>
      <p>Kosteus: {weatherData.main.humidity} %</p>
      <p>Kuvaus: {weatherData.weather[0].description}</p>
      <p>Tuulen nopeus: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
