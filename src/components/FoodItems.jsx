import React from 'react';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';
import FoodData from '../data/FoodData';

const FoodItems = () => {
  const selectedCategory = useSelector((state) => state.category);
  const searchTerm = useSelector((state) => state.search);

  const filteredItems = FoodData.filter((item) => {
    const matchesCategory =
      selectedCategory.toLowerCase() === 'all' ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="food-items-container">
      {filteredItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FoodItems;
