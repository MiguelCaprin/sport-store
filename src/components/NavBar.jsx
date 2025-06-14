import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "../css/NavBar.css";

import logo from "../images/logo.png";
import cartIcon from "../images/cart.png";

const NavBar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      alert("Sesión cerrada correctamente");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo Sport Store" />
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/ofertas">Ofertas</Link>
        </li>
      </ul>

      <div className="cart-container">
        <Link to="/cart" className="cart-link">
          <img src={cartIcon} alt="Ícono del carrito" className="cart-icon-img" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>

      <div className="auth-container">
        {user ? (
          <>
            <span className="user-name">Hola, {user.email}</span>
            <button onClick={handleLogout} className="logout-button">
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link to="/login" className="login-link">
            Iniciar sesión
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

