// src/App.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.css';

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ScanGo App</h1>
        <nav className="app-nav">
          <Link to="/">Home</Link>
          <Link to="/scan">Scan</Link>
          <Link to="/map">Map</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="app-footer">© 2025 ScanGo. All rights reserved.</footer>
    </div>
  );
}
