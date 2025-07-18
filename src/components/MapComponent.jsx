import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
  const [lat, setLat] = useState(6.5244); // Default Lagos
  const [lng, setLng] = useState(3.3792);

  return (
    <div>
      <input
        type="number"
        value={lat}
        onChange={(e) => setLat(parseFloat(e.target.value))}
        placeholder="Latitude"
      />
      <input
        type="number"
        value={lng}
        onChange={(e) => setLng(parseFloat(e.target.value))}
        placeholder="Longitude"
      />
      <div className="map-container">
        <MapContainer center={[lat, lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]} />
        </MapContainer>
      </div>
    </div>
  );
}
