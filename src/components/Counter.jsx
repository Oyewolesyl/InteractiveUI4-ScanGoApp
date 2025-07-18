import React, { useEffect, useState } from 'react';

export default function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 100;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [target]);

  return <h2>Users Saved: {count}</h2>;
}
