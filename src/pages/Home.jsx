import React from "react";
import worldImage from "../assets/world.jpg";
import { Link } from "react-router-dom";
import "./Home.css"
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa"; // Social Icons

const Home = () => {
  return (
    <section className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Explore The World</h1>
          <Link to="/countries">
            <button className="explore-btn">Start Exploring</button>
          </Link>
        </div>

        <div className="hero-img">
          <img src={worldImage} alt="World" />
        </div>
      </div>

      {/* About Section */}
      <div className="about-home">
        <h2>Here are interesting facts we're proud of</h2>
        <div className="facts-grid">
          <div className="fact-card">🌍 195 Countries in the World</div>
          <div className="fact-card">🏔️ Highest Mountain: Everest</div>
          <div className="fact-card">🌊 Largest Ocean: Pacific</div>
          <div className="fact-card">🏝️ Over 17,000 Islands in Indonesia</div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>🌍 World Tour Website © {new Date().getFullYear()} | Made with ❤️ by Vinay</p>
      </footer>
    </section>
  );
};

export default Home;
