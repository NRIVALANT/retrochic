import React from 'react';
import Header from '../components/header';
import Card from '../components/card';
import '../assets/style/home.css';

function Home() {
  return (
    <div>
        <Header />
        <div className="home-page">
          <div className='home-page-presentation'>
            <h1>RetroChic</h1>
              <p>
              L'aventure de RetroChic a commencé dans un petit garage, où ils ont commencé à rassembler des vêtements qu'ils trouvaient dans les marchés aux puces, les friperies et les ventes de garage. Ils ont rapidement remarqué que beaucoup de ces vêtements étaient en excellent état, mais qu'ils étaient souvent sous-estimés ou négligés. <br/>
              Avec leur expertise en développement, Nicolas et Jules ont décidé de créer un site web convivial où les gens pouvaient acheter et les friperies mettre en vente des vêtements de seconde main. Ils ont nommé leur site "RetroChic".
              </p>
          </div>
          <div className='home-page-card'>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        
    </div>
  );
}

export default Home;