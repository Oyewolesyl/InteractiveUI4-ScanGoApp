import React from 'react';

export default function Carousel() {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: '10px' }}>
      {items.map((item, i) => (
        <div key={i} style={{ minWidth: '150px', background: '#add', padding: '1em' }}>
          {item}
        </div>
      ))}
    </div>
  );
}
