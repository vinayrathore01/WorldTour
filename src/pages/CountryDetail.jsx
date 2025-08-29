import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./countryDetail.css";

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`
        );

        let countryData = response.data.find(
          (c) => c.name.common.toLowerCase() === name.toLowerCase()
        );

        if (!countryData) {
          countryData = response.data[0]; // fallback
        }

        setCountry(countryData);
      } catch (err) {
        setError("❌ Could not load country details. Try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Fetching details...</p>
      </div>
    );
  }

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="country-detail">
      <img src={country.flags.svg} alt={country.name.common} />
      <h1>{country.name.common}</h1>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Timezones:</strong> {country.timezones.join(", ")}</p>
    </div>
  );
};

export default CountryDetail;
