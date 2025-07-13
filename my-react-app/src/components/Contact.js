import React, { useState } from 'react';
import './Styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé !');
    setForm({ nom: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-info">
        <h2>Contact</h2>
        <div className="contact-details">
          <div>
            <span role="img" aria-label="Téléphone">📞</span>
            <span>0794308255</span>
          </div>
          <div>
            <span role="img" aria-label="Email">✉️</span>
            <span>brikiamina3@gmail.com</span>
          </div>
          <div>
            <span role="img" aria-label="Localisation">📍</span>
            <span>Algeirs, Algeria</span>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Nom</label>
        <input
          type="text"
          name="nom"
          value={form.nom}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Envoyer le message</button>
      </form>
    </section>
  );
};

export default Contact;