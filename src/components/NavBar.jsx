import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../css/NavBar.css';

const NavBar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo Sport Store" />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        {/* Si querés activar ofertas, asegurate de tener esa ruta creada */}
        <li><Link to="/ofertas">Ofertas</Link></li>
      </ul>

      <div className="cart-container">
        <Link to="/cart">
          <img src="/cart.png" alt="Ícono del carrito" className="cart-icon-img" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

