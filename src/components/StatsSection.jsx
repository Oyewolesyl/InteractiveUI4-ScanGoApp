import React from 'react';
import CountUp from 'react-countup';
import '../index.css';

export default function StatsSection() {
  const stats = [
    { label: 'Shops Visited', end: 123 },
    { label: 'Coupons Saved', end: 45 },
    { label: 'Total Savings', end: 789 },
  ];
  return (
    <section className="stats-section">
      {stats.map(s => (
        <div key={s.label} className="stat-block">
          <CountUp end={s.end} duration={2} />
          <p>{s.label}</p>
        </div>
      ))}
    </section>
  );
}
