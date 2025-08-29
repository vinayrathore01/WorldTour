// CountryCard.jsx -> Small card for a single country

import React from "react";
import "./CountryCard.css";

const CountryCard = ({ name, flag, capital, region }) => {
  return (
    <div className="country-card">
      {/* Flag */}
      <img src={flag} alt={name} />

      {/* Country details */}
      <h3>{name}</h3>
      <p>Capital: {capital || "N/A"}</p>
      <p>Region: {region}</p>
    </div>
  );
};

export default CountryCard;