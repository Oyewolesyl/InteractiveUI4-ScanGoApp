import React from 'react';

export default function Modal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>This is a Pop-up Demo</h3>
        <p>Thanks for testing ScanGO!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
