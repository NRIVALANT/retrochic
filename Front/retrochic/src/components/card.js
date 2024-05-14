import React from 'react';
import '../assets/style/card.css';
import Image from '../assets/chino.jpg';

function Card() {
  return (
    <div className="card">
      <h1>Chino</h1>
      <img src={Image} alt="Product" />
      <button className="card-btn">Voir plus</button>
    </div>
  );
}

export default Card;