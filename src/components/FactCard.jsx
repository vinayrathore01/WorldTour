// FactCard.jsx -> Small card to show a single fact

import React from "react";
import "./FactCard.css";

const FactCard = ({ title, detail }) => {
  return (
    <div className="fact-card">
      <h3>{title}</h3>
      <p>{detail}</p>
    </div>
  );
};

export default FactCard;
