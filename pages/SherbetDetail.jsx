import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SherbetDetail() {
  const params = useParams();
  const [sherbet, setSherbet] = useState(null);

  useEffect(() => {
    const url = `/api/sherbet/${params.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSherbet(data.sherbet);
        console.log(data.sherbet.name);
        console.log(sherbet);
      })
      .catch((err) => console.error("Error ", err));
  }, [params.id]);
  return (
    <div>
      <h1>Sherbet Details: </h1>
    </div>
  );
}
