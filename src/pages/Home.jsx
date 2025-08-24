import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-text">
        <h1>
          Welcome to <span className="highlight">YummyKart</span>
        </h1>
        <p>"Delivering Happiness with Flavour and Freshness🍕🍔!!"</p>
      </div>

      <CategoryMenu />
      <FoodItems />
      <Footer />
    </div>
  );
};

export default Home;
