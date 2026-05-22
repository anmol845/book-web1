import React, { useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);
  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/store?search=${search}`);
      setSearch("");
      setSearchOpen(false);
      setMenuOpen(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const goToCart = () => {
    navigate("/cart");
    setMenuOpen(false);
  };

  const goToLogin = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setMenuOpen(false);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 0);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Z" stroke="#ffffff" strokeWidth="1.5"/>
            <path d="M7 7h10M7 11h10M7 15h7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="logo-text">Redes Books</span>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/store" onClick={closeMenu}>Store</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact US</Link>
        </li>
      </ul>

      <div className="navbar-actions">
        <div className={`search-box ${searchOpen ? "open" : ""}`}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
          />

          <button
            type="button"
            className="search-submit"
            onClick={handleSearch}
          >
            Search
          </button>

          <button className="search-toggle" onClick={toggleSearch}>
          </button>
        </div>


        <button className="login-btn" onClick={goToLogin}>
          <span className="login-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="#fff" opacity="0.9"/>
              <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4v1H4v-1z" fill="#fff" opacity="0.9"/>
            </svg>
          </span>
          <span>Login</span>
        </button>

        <button className="buy-btn" onClick={goToCart}>
          <span className="cart-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#0f172a"/>
              <path d="M10 6V4a2 2 0 0 1 4 0v2" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
          <span>Cart ({cart.length})</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;