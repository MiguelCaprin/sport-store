import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import '../css/Cart.css';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  const [showConfirmMsg, setShowConfirmMsg] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleConfirmPurchase = () => {
    setShowConfirmMsg(true);

    // Después de 3.5 segundos comienza el fade out
    setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    // Después de 4 segundos oculta mensaje y limpia carrito
    setTimeout(() => {
      setShowConfirmMsg(false);
      setFadeOut(false);
      clearCart();
    }, 4000);
  };

  if (cart.length === 0 && !showConfirmMsg) {
    return (
      <div className="cart-empty marvel-font">
        <h2>Tu carrito está vacío 🛒</h2>
      </div>
    );
  }

  return (
    <div className="cart-container marvel-font">
      <h2>Carrito de Compras</h2>

      {showConfirmMsg && (
        <div className={`confirm-message-animated ${fadeOut ? 'fade-out' : 'fade-in'}`}>
          <p>✅ Pedido recibido. Estamos preparando tu envío.</p>
        </div>
      )}

      {!showConfirmMsg && (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image || item.imagen} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p>Precio unitario: ${item.precio}</p>
                  <p>Total: ${item.precio * item.quantity}</p>
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
            <h3>Total general: ${totalPrice}</h3>
            <button className="btn-vaciar" onClick={clearCart}>
              Vaciar carrito
            </button>
            <button className="btn-confirmar" onClick={handleConfirmPurchase}>
              Confirmar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
