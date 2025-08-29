// About.jsx -> Section showing world facts

import React from "react";
import "./About.css"
import FactCard from "../components/FactCard"; // Reusable card component

// Some interesting facts about countries
const facts = [
  { title: "195 Countries", detail: "The world has 195 officially recognized countries." },
  { title: "Largest Country", detail: "Russia is the largest country by land area." },
  { title: "Smallest Country", detail: "Vatican City is the smallest country in the world." },
  { title: "Most Populated", detail: "China and India have the largest populations." }
];

const About = () => {
  return (
    <section className="about">
      <h2>Here are interesting facts we're proud of</h2>

      {/* Mapping facts into multiple FactCard components */}
      <div className="facts-grid">
        {facts.map((fact, i) => (
          <FactCard key={i} title={fact.title} detail={fact.detail} />
        ))}
      </div>
    </section>
  );
};

export default About;
