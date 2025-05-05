// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Detecta la ruta actual

  useEffect(() => {
    window.scrollTo(0, 0); // Hace scroll al tope cuando cambia
  }, [pathname]);

  return null; // No renderiza nada
};

export default ScrollToTop;
