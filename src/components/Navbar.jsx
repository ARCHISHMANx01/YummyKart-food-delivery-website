import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaUser, FaQuestionCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showCart } from "../redux/slices/CartSlice";
import { setSearch } from "../redux/slices/SearchSlice";
import HelpModal from "./HelpModal"; 


const cities = ["Kolkata", "Gangtok","Delhi", "Mumbai", "Bangalore", "Haldia", "Chennai", "Hyderabad",
   "Pune", "Ahmedabad", "Jaipur"];
const Navbar = ({ cartCount = 0, onSearch , setCartVisible , setShowSignIn ,}) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("Location");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowDropdown(false);
  };

  const handleSearch = (e) => {
  const term = e.target.value;
  setSearchTerm(term);
  dispatch(setSearch(term));  // Dispatch to Redux
};

  return (
    <nav className="navbar">
      {/* LEFT SECTION */}
      <div className="navbar-left">
        <div className="navbar-brand">
          <img src="/images/logo_yummy.png" alt="YummyKart" className="navbar-logo" />
          <span className="brand-name">YummyKart</span>
        </div>
        <div className="navbar-location" onClick={() => setShowDropdown(!showDropdown)}>
          {selectedCity} ⌄
          {showDropdown && (
            <ul className="dropdown-menu">
              {cities.map((city) => (
                <li key={city} onClick={() => handleCitySelect(city)}>
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* CENTER: Search Bar */}
      <div className="navbar-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="navbar-right">
        <div className="navbar-item">
          <FaQuestionCircle className="icon" />
          <span onClick={() => setShowHelp(true)}>Help</span>
          {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}  
        </div>
        <div className="navbar-item" onClick={() => setShowSignIn(true)}>
  <FaUser className="icon" />
  <span>Sign In</span>
</div>

        <div className="navbar-item cart" onClick={() => dispatch(showCart())}>
          <FaShoppingCart className="icon" />
          <span>Cart</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
    </nav>
   
  );
};

export default Navbar;
