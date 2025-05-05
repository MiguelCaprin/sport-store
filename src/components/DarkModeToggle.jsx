import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} style={styles.button}>
      {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
};

const styles = {
  button: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    background: '#333',
    color: '#fff',
    marginBottom: '1.5rem',
  }
};

export default DarkModeToggle;
