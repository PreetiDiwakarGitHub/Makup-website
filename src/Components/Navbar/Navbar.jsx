import React from "react";
import "./Navbar.css";

function Navbar({ setSelectedCategory, setSearchQuery }) {
  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    console.log("Search button clicked!");
    // Add any logic here to handle the search, e.g., API call or filter
  };

  // Function to handle "Enter" key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="navbar-container">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        aria-label="Search products" // Accessibility improvement
      />
      {/* Search button */}
      <button onClick={handleSearchClick} aria-label="Search button">
        Search
      </button>
    </div>
  );
}

export default Navbar;
