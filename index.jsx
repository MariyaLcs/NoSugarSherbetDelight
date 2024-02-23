import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sherbet from "./pages/Sherbet";
import SherbetDetail from "./pages/SherbetDetail";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #Sherbet
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/sherbet">Sherbet</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sherbet" element={<Sherbet />} />
        <Route path="/sherbet/:id" element={<SherbetDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
