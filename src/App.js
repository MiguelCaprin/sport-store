import './App.css';
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import OfferCarousel from './components/OfferCarousel';
import Login from './components/Login';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;
  if (!user) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Inicio />
              </PrivateRoute>
            }
          />
          <Route
            path="/productos"
            element={
              <PrivateRoute>
                <ItemListContainer />
              </PrivateRoute>
            }
          />
          <Route
            path="/categoria/:categoryId"
            element={
              <PrivateRoute>
                <ItemListContainer />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/ofertas"
            element={
              <PrivateRoute>
                <OfferCarousel />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;


