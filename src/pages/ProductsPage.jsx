import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../index.css';

const products = [
  { id: 1, name: 'Gadget A', img: 'https://via.placeholder.com/200', price: '$19.99' },
  { id: 2, name: 'Gadget B', img: 'https://via.placeholder.com/200', price: '$29.99' },
  { id: 3, name: 'Gadget C', img: 'https://via.placeholder.com/200', price: '$39.99' },
];

export default function ProductsPage() {
  const responsive = {
    desktop: { breakpoint: { min: 1024, max: 3000 }, items: 3 },
    tablet: { breakpoint: { min: 464, max: 1024 }, items: 2 },
    mobile: { breakpoint: { min: 0, max: 464 }, items: 1 },
  };
  return (
    <section className="products-page">
      <h2>Featured Products</h2>
      <Carousel responsive={responsive}>
        {products.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name} style={{ width: '100%' }} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
