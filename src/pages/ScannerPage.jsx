import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import '../index.css';

export default function ScannerPage() {
  const [result, setResult] = useState('No result yet');

  return (
    <section className="scanner-page">
      <h2>QR Scanner</h2>
      <p>Use your webcam to scan a QR Code below:</p>

      <div className="scanner-wrapper">
        <BarcodeScannerComponent
          width="100%"
          height={300}
          onUpdate={(err, res) => {
            if (res) {
              setResult(res.text);
            } else if (err) {
              console.error('Scanner Error:', err);
              setResult("Camera error or no QR detected.");
            }
          }}
        />
      </div>

      <p className="scan-result">Result: <strong>{result}</strong></p>
    </section>
  );
}
