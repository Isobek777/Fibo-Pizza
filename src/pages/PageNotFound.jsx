import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '100px' }}>404</h1>
      <p style={{ fontSize: '24px' }}>Kechirasiz, sahifa topilmadi.</p>
      <Link to="/" style={{ marginTop: '20px', display: 'inline-block', fontSize: '18px', color: '#007bff' }}>
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default PageNotFound;
