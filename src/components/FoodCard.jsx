import React from 'react';

const FoodCard = ({ food }) => {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} className="food-image" />
      <div className="food-details">
        <h3>{food.name}</h3>
        <p>₹{food.price}</p>
       </div>
    </div>
  );
};

export default FoodCard;
