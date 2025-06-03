// src/App.js
import './App.css';
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import OfferCarousel from './components/OfferCarousel'; // Importamos el carrusel de ofertas
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <ScrollToTop />
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/ofertas" element={<OfferCarousel />} /> {/* Agregamos la ruta de Ofertas */}
            <Route path="*" element={<Inicio />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;

