import React from 'react';
import './Header.css';

function Header({ setShowWishlist, setShowLogin, setShowCart, goToHome, cart }) {
  return (
    <div className="header-container">
      <ul>
        <li onClick={goToHome}>Home</li> {/* Navigate to Home */}
        <li onClick={() => { setShowWishlist(true); setShowCart(false); }}>Wishlist</li>
        <li onClick={() => { setShowCart(true); setShowWishlist(false); }}>Cart ({cart.length})</li> {/* Show cart count */}
        <li onClick={() => setShowLogin(true)}>Login</li>
      </ul>
    </div>
  );
}

export default Header;
