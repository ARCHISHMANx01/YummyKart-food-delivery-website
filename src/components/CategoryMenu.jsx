import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

const categories = ['All', 'Veg', 'Non-Veg', 'Snacks', 'Drinks'];

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.category);

  const handleClick = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="category-menu">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu;
