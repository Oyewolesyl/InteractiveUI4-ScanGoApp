import React, { useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

export default function QRScanner() {
  useEffect(() => {
    const scanner = new Html5Qrcode("reader");
    scanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      (decoded) => {
        window.location.href = decoded;
      },
      (error) => {
        console.warn(error);
      }
    );

    return () => scanner.stop();
  }, []);

  return <div id="reader" style={{ width: "300px", height: "300px" }}></div>;
}
