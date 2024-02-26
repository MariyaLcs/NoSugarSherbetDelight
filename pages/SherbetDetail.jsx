import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SherbetDetail() {
  const params = useParams();
  const [sherbetDetails, setSherbetDetails] = useState(null);

  useEffect(() => {
    const url = `/api/sherbet/${params.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSherbetDetails(data.sherbet);
        console.log(data.sherbet);
      })
      .catch((err) => console.error("Error ", err));
  }, [params.id]);

  return (
    <div>
      {sherbetDetails ? (
        <div className="sherbet-detail">
          <img
            src={`/assets/images/${sherbetDetails.image}`}
            alt={sherbetDetails.name}
          />
          <h2>{sherbetDetails.name}</h2>
          <p>{sherbetDetails.description}</p>
          <p className="recipe">{sherbetDetails.recipe}</p>
        </div>
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
}
