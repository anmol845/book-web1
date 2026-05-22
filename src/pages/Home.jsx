import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      <div className="hero">
        <div className="left">
          <span className="tag">Analysis. Research. Problem Solving.</span>

          <h1>
            Find <br />
            yourself in a <br />
            Great Book
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fusce dapibus risus velit.
          </p>

          <div className="buttons">
            <button 
              className="primary"
              onClick={() => navigate("/store")}
            >
              Get Started →
            </button>
            <button 
              className="secondary"
              onClick={() => navigate("/about")}
            >
              Learn more
            </button>
          </div>
        </div>

        <div className="right">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4imwumvC5tb_zF2iTe67TIj-GbmxpD3Njjw&s"
            alt="book"
            className="book"
          />
         
        </div>
      </div>

      <div className="cards">
        <div className="card pink">
          <h3>Trending Books</h3>
          <p>Explore Trending Books of This Month</p>
        </div>

        <div className="card dark">
          <h3>Our Greatest Collection</h3>
          <p>Choose your favorite Books</p>
        </div>

        <div className="card light">
          <h3>Our Exclusive Articles</h3>
          <p>32K Total Reviews</p>
        </div>
      </div>

    </div>
  );
}

export default Home;