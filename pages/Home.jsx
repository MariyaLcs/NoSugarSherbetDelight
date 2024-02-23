import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Add a Splash of Flavor to Your Life with Sugar-Free Sherbet</h1>
      <p>
        Embrace the taste of natural sweetness. Discover your perfect sherbet
        flavor for a refreshing, guilt-free treat.
      </p>
      <Link to="sherbet">Find Your Flavor</Link>
    </div>
  );
}
