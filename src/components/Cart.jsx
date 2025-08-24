import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decreaseQuantity,
  clearCart,
  hideCart,
} from '../redux/slices/CartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: cartItems, isVisible } = useSelector((state) => state.cart);
  const cartRef = useRef(null);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ✅ Close cart when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isVisible && cartRef.current && !cartRef.current.contains(e.target)) {
        dispatch(hideCart());
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [dispatch, isVisible]);

  // ✅ Handle checkout
const handleCheckout = () => {
  dispatch(clearCart());
  navigate("/success");
};



  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className={`cart-wrapper ${isVisible ? 'show-cart' : ''}`}>
      <div className="cart-panel" ref={cartRef}>
        {/* Close Button */}
        <button className="cart-close-btn" onClick={() => dispatch(hideCart())}>
          &times;
        </button>

        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <div className="qty-controls">
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleAdd(item)}>+</button>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-footer">
              <h3>Total: ₹{total}</h3>
              <button className="checkout-btn" onClick={handleCheckout}>
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
