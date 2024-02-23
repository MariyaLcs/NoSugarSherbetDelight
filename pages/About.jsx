import React from "react";
import bgImg from "../assets/images/about-hero.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <img src={bgImg} className="about-hero-image" />
      <div className="about-page-content">
        <h1>Discover the Sweetness of Nature, Without the Sugar.</h1>
        <p>
          Our mission is to enhance your lifestyle with sugar-free sherbet made
          from the freshest fruits and berries. Each flavor is crafted to
          perfection, ensuring a guilt-free indulgence that doesn't compromise
          on taste.
        </p>
        <p>
          Our team is passionate about natural, healthy eating and the joy of
          discovering new, delightful flavors. We believe in the simplicity of
          ingredients and the power of nature to provide the best in frozen
          treats.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>Your flavor adventure starts here.</h2>
        <Link className="link-button" to="/sherbet">
          Explore our flavors
        </Link>
      </div>
    </div>
  );
}
