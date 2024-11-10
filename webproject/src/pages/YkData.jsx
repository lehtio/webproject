
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const YkData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hakee datan backendistä
    const fetchData = async () => {
      try {
        const response = await fetch('/api/sdg-data'); // Vaihda URL tarvittaessa
        if (!response.ok) throw new Error('Data fetch failed');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>YK:n Kestävän Kehityksen Indikaattorit</h1>
      {error && <p>Error: {error}</p>}
      
      {/* Kartta, jossa näkyvät maat ja niiden indikaattorit */}
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {data.map((countryData, index) => (
          <Marker
            key={index}
            position={[countryData.lat, countryData.lon]} // Aseta oikeat koordinaatit
          >
            <Popup>
              <strong>{countryData.country}</strong><br />
              Goal: {countryData.goal}<br />
              Target: {countryData.target}<br />
              Value: {countryData.value}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default YkData;
