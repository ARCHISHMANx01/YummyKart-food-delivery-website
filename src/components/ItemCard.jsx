import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(item));
    console.log("Added to cart:", item.name);
  };

  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>₹{item.price}</p>
        <button onClick={handleAdd} className="add-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
