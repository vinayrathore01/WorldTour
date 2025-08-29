// Contact.jsx -> Contact form page

import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa"; 
import "./Contact.css"; 

const Contact = () => {
  // Form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setForm({ name: "", email: "", message: "" }); 
  };

  return (
    <section className="contact-page">
      {/* Contact Form Box */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>

        {/* Input for Name */}
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        {/* Input for Email */}
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        {/* Input for Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        {/* Submit Button */}
        <button type="submit">Send Message</button>
      </form>

      {/* Social Media Links */}
      <div className="contact-icons">
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="mailto:example@email.com">
          <FaEnvelope />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
