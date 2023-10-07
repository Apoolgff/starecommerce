import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escriba su mensaje aquí"
          />
        </div>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default Contact;
