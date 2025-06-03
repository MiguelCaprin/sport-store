// src/components/OfferCarousel.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../css/OfferCarousel.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useCart } from '../context/CartContext';

const OfferCarousel = () => {
  const [offerProducts, setOfferProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'productos'));
        const offers = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(product => product.offer === true);
        setOfferProducts(offers);
      } catch (error) {
        console.error('Error al obtener productos en oferta:', error);
      }
    };

    fetchOffers();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="offer-carousel-container">
      <h2>¡Ofertas Especiales!</h2>
      <Slider {...settings}>
        {offerProducts.map((product) => (
          <div key={product.id} className="offer-item">
            <img src={product.imagen} alt={product.name} className="offer-item-img" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.precio}</p>  {/* Aquí el cambio */}
              <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferCarousel;


