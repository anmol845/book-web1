import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  // 🔍 Search
  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/store?search=${search}`);
      setSearch("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // 🛒 Go to cart page
  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">📘 Redes</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/contact">Contact US</Link></li>
      </ul>

      {/* 🔍 Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <span className="search-icon" onClick={handleSearch}>
          🔍
        </span>
      </div>

      {/* 🛒 Cart Button */}
      <button className="buy-btn" onClick={goToCart}>
        🛒 Cart ({cart.length})
      </button>
    </nav>
  );
}

export default Navbar;