// src/components/QRGenerator.jsx
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function QRGenerator() {
  const [text, setText] = useState('https://yourapp.com');

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to generate QR"
      />
      <div style={{ marginTop: '1rem' }}>
        <QRCodeCanvas value={text} size={200} />
      </div>
    </div>
  );
}
