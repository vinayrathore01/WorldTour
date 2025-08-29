// App.jsx -> Main application with routes

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navigation bar
import Home from "./pages/Home";          // Home page
import About from "./pages/About";        // About page
import Countries from "./pages/Countries";// Country page
import Contact from "./pages/Contact";    // Contact page
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* Defining routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:name" element={<CountryDetail />} /> {/* 👈 added */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
