import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sherbet() {
  const [sherbet, setSherbet] = useState([]);

  useEffect(() => {
    fetch("/api/sherbet")
      .then((res) => res.json())
      .then((data) => setSherbet(data.sherbets)) // Adjusted here
      .catch((err) => console.error("Failed fetching data", err));
  }, []);

  return (
    <div className="card">
      {sherbet.map((item) => (
        <div key={item.id} className="sherbet-title">
          <img src={`/assets/images/${item.image}`} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <i className={`sherbet-type ${item.type}`}>{item.type}</i>
        </div>
      ))}
    </div>
  );
}
