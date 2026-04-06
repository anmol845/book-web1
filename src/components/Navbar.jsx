import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  // 🔍 Search
  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/store?search=${search}`);
      setSearch("");
      setMenuOpen(false);
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
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">📘 Redes</h2>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/store" onClick={closeMenu}>
            Store
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact US
          </Link>
        </li>
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