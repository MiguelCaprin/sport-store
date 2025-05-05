// src/App.js
import './App.css';
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop'; // Importamos el componente

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <ScrollToTop /> {/* Agregamos el ScrollToTop aquí */}
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} /> {/* Ruta de inicio */}
            <Route path="/productos" element={<ItemListContainer />} /> {/* Todos los productos */}
            <Route path="/categoria/:categoryId" element={<ItemListContainer />} /> {/* Filtro por marca */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;






