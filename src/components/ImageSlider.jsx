import React from 'react';
import Slider from 'react-slick';
import '../css/ImageSlider.css'; // CSS del slider
import cr7 from '../images/cr7-nike.jpg';
import mj from '../images/mj-jordan.jpg';

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
      image: cr7,
      alt: 'Cristiano Ronaldo - Nike',
      brand: 'Nike'
    },
    {
      image: 'https://robbreport.mx/wp-content/uploads/2025/02/messi-ss25-originals-jq0266-jd1942-jc9508-16x9-2-min.jpeg',
      alt: 'Lionel Messi - Adidas',
      brand: 'Adidas'
    },
    {
      image: mj,
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

