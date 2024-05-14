import React from 'react';
import '../assets/style/card.css';
import Image from '../assets/chino.jpg';

function Card() {
  const name = 'Chino';
  const description = 'Pantalon chino beige';
  const price = '20€';
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={Image} alt="Product" />
      <p>{description}</p>
      <p>{price}</p>
      <button className="card-btn">Voir plus</button>
    </div>
  );
}

export default Card;