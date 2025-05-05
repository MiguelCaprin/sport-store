import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contacto</h3>
        <ul>
          <li><a href="mailto:miguelangelcaprin@otulook.com"><i className="fas fa-envelope"></i> Email: miguelangelcaprin@otulook.com</a></li>
          <li><a href="https://www.linkedin.com/in/miguel-angel-caprin-570555273" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn: Miguel Caprin</a></li>
          <li><a href="https://github.com/MiguelCaprin" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub: MiguelCaprin</a></li>
          <li><a href="https://wa.me/1127061767" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp: +54 1127061767</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Redes Sociales</h3>
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Copyright</h3>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Sport Store. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

