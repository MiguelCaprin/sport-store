// src/context/AuthContext.js

import { createContext, useContext, useEffect, useState } from "react";
import { 
  auth, 
  googleProvider 
} from "../config/firebase";  // Asegurate que googleProvider esté exportado en firebase.js
import { 
  onAuthStateChanged, 
  signOut, 
  signInWithPopup, 
  signInWithEmailAndPassword 
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Login con Google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Login con Email y contraseña
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, loginWithEmail, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
