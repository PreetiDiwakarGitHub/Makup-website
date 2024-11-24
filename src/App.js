import React, { useState } from "react";
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Image from './Components/Image/Image';
import ProductList from './Components/ProductList/ProductList';
import Login from './Components/Login/Login'; 
import Footer from "./Components/Footer/Footer";
import './App.css';
import FeedbackForm from "./Components/FeedbackFrom/FeedbackForm";
import Photo from "./Components/Photo/Photo";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All Product');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Function to reset to Home
  const goToHome = () => {
    setShowWishlist(false);
    setShowLogin(false);
    setShowCart(false);
  };

  const handleAddToWishlist = (product) => {
    if (wishlist.some(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id)); 
    } else {
      setWishlist([...wishlist, product]); 
    }
  };

  const handleAddToCart = (product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]); 
    }
  };

  return (
    <>
      <Header 
        setShowWishlist={setShowWishlist} 
        setShowLogin={setShowLogin} 
        setShowCart={setShowCart} 
        goToHome={goToHome} // Pass Home function
        cart={cart} 
      />
      {!showLogin && <Navbar setSelectedCategory={setSelectedCategory} setSearchQuery={setSearchQuery} />}
      {!showLogin && <Image />}

      {showLogin ? (
        <Login /> 
      ) : showWishlist ? (
        <div className="wishlist-products">
          <h2>Your Wishlist</h2>
          <ProductList 
            selectedCategory="All Product" 
            searchQuery="" 
            wishlist={wishlist} 
            handleAddToWishlist={handleAddToWishlist} 
            handleAddToCart={handleAddToCart} 
            showWishlistOnly={true} 
          />
        </div>
      ) : showCart ? (
        <div className="cart-products">
          <h2>Your Cart</h2>
          <ProductList 
            selectedCategory="All Product" 
            searchQuery="" 
            wishlist={wishlist} 
            cart={cart} 
            handleAddToWishlist={handleAddToWishlist} 
            handleAddToCart={handleAddToCart} 
            showCartOnly={true} 
          />
        </div>
      ) : (
        <ProductList 
          selectedCategory={selectedCategory} 
          searchQuery={searchQuery} 
          wishlist={wishlist} 
          handleAddToWishlist={handleAddToWishlist} 
          handleAddToCart={handleAddToCart} 
          showWishlistOnly={false} 
        />
      )}
      <Photo/>
      <FeedbackForm/>
      <Footer/>
    </>
  );
}

export default App;
