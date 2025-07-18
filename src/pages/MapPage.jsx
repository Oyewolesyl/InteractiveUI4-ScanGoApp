import React, { useState } from 'react';
import '../index.css';

export default function MapPage() {
  const [location, setLocation] = useState("Lagos, Nigeria");

  return (
    <section className="map-page">
      <h2>Store Locator</h2>
      <p>Enter a location to display it on the map:</p>
      <input
        type="text"
        className="map-input"
        placeholder="e.g. Abuja, Nigeria"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <iframe
        title="Google Map"
        width="100%"
        height="400"
        style={{ border: 0, marginTop: "20px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
      />
    </section>
  );
}
