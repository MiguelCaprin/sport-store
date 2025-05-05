import React from 'react';
import { useCart } from '../context/CartContext';
import '../css/Cart.css'; // Asegúrate de que incluye los estilos Marvel

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-empty marvel-font">
        <h2>Tu carrito está vacío 🛒</h2>
      </div>
    );
  }

  return (
    <div className="cart-container marvel-font">
      <h2>Carrito de Compras</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <button
                className="btn-eliminar"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total general: ${total}</h3>
        <button className="btn-vaciar" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
