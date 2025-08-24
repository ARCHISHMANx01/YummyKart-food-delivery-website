import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home-btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
