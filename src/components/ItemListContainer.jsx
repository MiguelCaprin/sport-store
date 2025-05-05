// src/components/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BrandFilter from './BrandFilter';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useCart } from '../context/CartContext';
import '../css/ItemListContainer.css';

const ItemListContainer = () => {
  const { categoryId } = useParams(); // Obtener el parámetro categoryId de la URL
  const navigate = useNavigate(); // Para poder redirigir programáticamente
  const { addToCart } = useCart();

  const [productos, setProductos] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(categoryId || ''); // Usar categoryId de la URL si está presente
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const getProductos = async () => {
      const productosCollection = collection(db, 'productos');
      const productosSnapshot = await getDocs(productosCollection);
      const productosList = productosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProductos(productosList);
    };
    getProductos();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    // Cambiar el selectedBrand cuando se actualiza la URL
    setSelectedBrand(categoryId || '');
  }, [categoryId]);

  const brands = [...new Set(productos.map((prod) => prod.categoria))];

  const filteredProducts = productos.filter((prod) => {
    const nombre = prod.nombre?.toLowerCase() || '';
    const categoria = prod.categoria?.toLowerCase() || '';
    const matchesBrand = selectedBrand
      ? categoria === selectedBrand.toLowerCase()
      : true;
    const matchesSearch =
      nombre.includes(searchTerm.toLowerCase()) ||
      categoria.includes(searchTerm.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  // Cambiar selectedBrand y actualizar la URL cuando se seleccione una nueva marca en el dropdown
  const handleBrandChange = (brand) => {
    console.log('Marca seleccionada:', brand); // Para verificar que la marca seleccionada es la correcta
    if (brand === '') {
      setSelectedBrand('');
      navigate(`/productos`); // Volver a la vista general de productos
    } else {
      setSelectedBrand(brand);
      navigate(`/categoria/${brand.toLowerCase()}`); // Redirigir a la categoría seleccionada
    }
  };

  return (
    <div className="item-list-container">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="dark-mode-toggle"
      >
        {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>

      <h2>Productos</h2>

      <input
        type="text"
        placeholder="Buscar indumentaria..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <BrandFilter
        brands={brands}
        selectedBrand={selectedBrand}
        onSelectBrand={handleBrandChange} // Usar la función para manejar el cambio de marca
      />

      <div className="product-grid">
        {filteredProducts.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.imagen} alt={prod.nombre} />
            <h4>{prod.nombre}</h4>
            <p><strong>Precio:</strong> ${prod.precio}</p>
            <button
              className="add-to-cart-btn"
              onClick={() =>
                addToCart({
                  id: prod.id,
                  nombre: prod.nombre,
                  precio: prod.precio,
                  imagen: prod.imagen,
                  cantidad: 1
                })
              }
            >
              ➕ Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;







