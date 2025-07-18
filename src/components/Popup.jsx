import React, { useState } from 'react';

export default function Popup() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Show Popup</button>
      {visible && (
        <div style={{ background: '#eee', padding: '1em', marginTop: '10px' }}>
          <p>This is a popup</p>
          <button onClick={() => setVisible(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
