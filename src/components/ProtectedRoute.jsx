import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const cartItems = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div className="protected-wrapper">
        <div className="protected-message">
          <h2>Cart is Empty</h2>
          <p>Please add something to the cart to proceed.</p>
          <Navigate to="/" replace />
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
