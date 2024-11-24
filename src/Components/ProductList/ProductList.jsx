import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";

const ProductList = ({ selectedCategory, searchQuery, wishlist, cart, handleAddToWishlist, handleAddToCart, showWishlistOnly, showCartOnly }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products using axios
  useEffect(() => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setError("No products found");
        }
      })
      .catch(() => {
        setError("Failed to fetch products. Please try again later.");
      });
  }, []);

  // Filter products based on selected category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Product" ||
      (product.product_type &&
        product.product_type.toLowerCase() === selectedCategory.toLowerCase());
    const matchesSearchQuery = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  // Display products based on wishlist or cart view
  const displayedProducts = showWishlistOnly
    ? filteredProducts.filter((product) =>
        wishlist.some((item) => item.id === product.id)
      )
    : showCartOnly
    ? filteredProducts.filter((product) =>
        cart.some((item) => item.id === product.id)
      )
    : filteredProducts;

  return (
    <div className="product-list-container">
      <h1>
        {showWishlistOnly
          ? "Wishlist"
          : showCartOnly
          ? "Cart"
          : selectedCategory}{" "}
        Products
      </h1>
      {error && <p className="error-message">{error}</p>}
      <ul className="product-list">
        {displayedProducts.length === 0 ? (
          <p>No products found...</p>
        ) : (
          displayedProducts.map((product) => (
            <li key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>
                <strong>Price:</strong> {product.price ? `$${product.price}` : "N/A"}
              </p>
              <img src={product.image_link} alt={product.name} />
              <p>
                <strong>Description:</strong>{" "}
                {product.description && product.description.trim() !== ""
                  ? product.description
                  : "No description available."}
              </p>
              <div className="product-details">
                <button
                  className={`wishlist-btn ${
                    wishlist.some((item) => item.id === product.id) ? "added" : ""
                  }`}
                  onClick={() => handleAddToWishlist(product)}
                >
                  <span role="img" aria-label="heart">
                    {wishlist.some((item) => item.id === product.id)
                      ? "❤️"
                      : "🩵"}
                  </span>
                </button>
                <br />
                {!showCartOnly && (
                  <button
                    className="add-to-cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
                <a
                  href={product.product_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="view-product-btn">View Product</button>
                </a>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProductList;
