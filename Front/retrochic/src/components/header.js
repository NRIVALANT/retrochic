import React, { useState } from "react";
import '../assets/style/header.css';
import shop from '../assets/shop.png';
import login from '../assets/login.png';
import logo from '../assets/loog.png';

function Header() {
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit(e);
        }
    }
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/catalogue">Catalogue</a>
          </li>
          <li>
            <img src={logo} alt="logo" />
          </li> 
          <li>
            <a href="/about">About</a>
          </li>
            <li>
                <input type="text" placeholder="Rechercher..." value={search} onChange={handleSearch} onKeyPress={handleKeyPress} />
            </li>
            <li>
                <a href="/shop">
                    <img src={shop} alt="shop" />
                </a>
            </li>
            <li>
                <a href="/login">
                    <img src={login} alt="login" />
                </a>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;