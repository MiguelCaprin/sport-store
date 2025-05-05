// src/components/BrandFilter.jsx
import React from 'react';

const BrandFilter = ({ brands, selectedBrand, onSelectBrand }) => {
  const handleChange = (e) => {
    // Llamamos a la función pasada como props para cambiar la marca seleccionada
    onSelectBrand(e.target.value);
  };

  return (
    <div className="brand-filter">
      <select value={selectedBrand} onChange={handleChange}>
        <option value="">Marcas</option> {/* Cambio de "Todas las marcas" a "Marcas" */}
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandFilter;




