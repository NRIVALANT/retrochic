import React from 'react';
import '../assets/style/shop.css';
import Navbar from '../components/header';
import { useState } from 'react';


function Shop() {
    // Déclaration de l'état pour les articles dans le panier
    const [cartItems, setCartItems] = useState([]);

    // Fonction pour supprimer un article du panier
    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    // Calcul du total du panier
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>
            <Navbar />
            <div className="shop">
                <div className="shop-items">
                    
                </div>
                <div className="page-shop-cart">
                    <h1>Cart</h1>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.price}€
                                <button onClick={() => removeFromCart(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h2>Total: {calculateTotal()}€</h2>
                </div>
            </div>
        </div>
    );
}

export default Shop;