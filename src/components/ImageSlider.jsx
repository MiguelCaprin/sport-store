// src/components/ImageSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import '../css/ImageSlider.css'; // Asegúrate de tener el archivo CSS creado

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  const slides = [
    {
      image: 'cr7-nike.jpg',  // Solo el nombre de la imagen, no /public/
      alt: 'Cristiano Ronaldo - Nike',
      brand: 'Nike'
    },
    {
      image: 'https://robbreport.mx/wp-content/uploads/2025/02/messi-ss25-originals-jq0266-jd1942-jc9508-16x9-2-min.jpeg',
      alt: 'Lionel Messi - Adidas',
      brand: 'Adidas'
    },
    {
      image: 'mj-jordan.jpg',
      alt: 'Michael Jordan - Jordan',
      brand: 'Jordan'
    }
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.alt} />
            <div className="slide-caption">{slide.brand}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
