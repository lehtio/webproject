// src/pages/MaailmanSaa.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/kartta.css'; // Importtaa kartta.css tyylitiedosto

const MaailmanSaa = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [clickedPosition, setClickedPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (lat, lon) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/weather?lat=${lat}&lon=${lon}`);
      if (!response.ok) throw new Error('Data fetch failed');
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setClickedPosition({ lat, lon: lng });
        fetchWeatherData(lat, lng);
      },
    });
    return null;
  };

  const CenterMap = () => {
    const map = useMap();
    useEffect(() => {
      if (clickedPosition) {
        map.setView([clickedPosition.lat, clickedPosition.lon], 8);
      }
    }, [clickedPosition, map]);
    return null;
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Maailman Sää</h1>
      
      {error && <p>Error: {error}</p>}
      
      <div className="map-container">
        <MapContainer center={[20, 0]} zoom={2} className="leaflet-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <MapClickHandler />
          <CenterMap />

          {clickedPosition && weatherData && (
            <Marker position={[clickedPosition.lat, clickedPosition.lon]}>
              <Popup>
                <h2>Sää: {weatherData.name}</h2>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather icon" />
                <p>Lämpötila: {weatherData.main.temp} °C</p>
                <p>Kosteus: {weatherData.main.humidity} %</p>
                <p>Kuvaus: {weatherData.weather[0].description}</p>
                <p>Tuulen nopeus: {weatherData.wind.speed} m/s</p>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MaailmanSaa;
