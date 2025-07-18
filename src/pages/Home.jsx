import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import CountUp from 'react-countup';
import '../index.css';

export default function Home() {
  const [text, setText] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [tip, setTip] = useState(null);

  useEffect(() => {
    setTip("💡 Scan at least 3 shops to unlock a 10% discount!");
  }, []);

  const handlePrint = () => {
    const qrCodeDiv = document.getElementById('qr-code-to-print');
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head><title>Print QR</title></head>
        <body style="display:flex;justify-content:center;align-items:center;margin-top:100px;">
          ${qrCodeDiv.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <section className="home-page">
      <h2>Generate a QR Code</h2>
      <p>Type in any text or URL to generate a QR Code instantly:</p>

      <input
        type="text"
        placeholder="Enter text or link..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="qr-input"
      />

      <button onClick={() => setShowQR(true)} className="qr-button">
        Generate QR
      </button>

      {showQR && (
        <div className="qr-popup-wrapper">
          <div className="qr-popup">
            <div className="qr-code-only" id="qr-code-to-print">
              <QRCode value={text || ' '} size={200} />
            </div>

            <div className="qr-buttons">
              <button onClick={handlePrint} className="qr-button">Print</button>
              <button onClick={() => setShowQR(false)} className="close-button">Close</button>
            </div>
          </div>
        </div>
      )}

      {tip && (
        <div className="qr-popup-wrapper">
          <div className="qr-popup">
            <h3>💡 Tip of the Day</h3>
            <p>{tip}</p>
            <button onClick={() => setTip(null)} className="close-button">Close</button>
          </div>
        </div>
      )}

      <section className="stats-section">
        <div className="stats-header">
          <h3>My Stats</h3>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <p>🏪 Shops Visited</p>
            <h4><CountUp end={12} duration={2} /></h4>
          </div>
          <div className="stat-card">
            <p>📦 Items Scanned</p>
            <h4><CountUp end={47} duration={2.5} /></h4>
          </div>
          <div className="stat-card">
            <p>🎟️ Coupons Used</p>
            <h4><CountUp end={8} duration={2} /></h4>
          </div>
          <div className="stat-card">
            <p>💰 Total Saved</p>
            <h4>$<CountUp end={120.75} duration={3} decimals={2} /></h4>
          </div>
        </div>
      </section>
    </section>
  );
}
