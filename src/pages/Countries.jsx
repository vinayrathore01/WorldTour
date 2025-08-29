import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./countries.css"; 

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags,cca3")
      .then((res) => setCountries(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Filter countries based on search text
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="countries">
      <h2>Explore Countries</h2>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search for a country..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="country-grid">
        {filteredCountries.map((country) => (
          <Link
            to={`/countries/${country.cca3}`}
            key={country.cca3}
            className="country-card"
          >
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="flag"
            />
            <h3>{country.name.common}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Countries;
