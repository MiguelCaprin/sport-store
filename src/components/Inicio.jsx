// src/components/Inicio.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import '../css/Inicio.css';

// ✅ Importación de los logos desde src/images
import nikeLogo from '../images/nike-logo.png';
import adidasLogo from '../images/adidas-logo.png';
import jordanLogo from '../images/jordan-logo.png';

const Inicio = () => {
  return (
    <div className="inicio-container">
      {/* Slider de imágenes con los atletas */}
      <ImageSlider />

      <div className="overlay">
        {/* Título y descripción */}
        <h1>Bienvenidos a <span>Sport Store</span></h1>
        <p>Tu casa de deportes con estilo y pasión.</p>

        {/* Logos de las marcas, cada uno con un link a la categoría */}
        <div className="brand-logos">
          <Link to="/categoria/nike">
            <img src={nikeLogo} alt="Nike" />
          </Link>
          <Link to="/categoria/adidas">
            <img src={adidasLogo} alt="Adidas" />
          </Link>
          <Link to="/categoria/jordan">
            <img src={jordanLogo} alt="Jordan" />
          </Link>
        </div>

        {/* Botón para ver productos */}
        <Link to="/productos" className="cta-button">Ver Productos</Link>
      </div>
    </div>
  );
};

export default Inicio;




