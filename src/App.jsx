import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Success from "./pages/Success";
import SignInModal from "./components/SignInModal";


function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  

  


  //  Pull cart item count from Redux
  const cartItems = useSelector((state) => state.cart.items);
  const isCartVisible = useSelector((state) => state.cart.isVisible);

  return (
    <>
      <Navbar
        cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)}
        setShowSignIn={setShowSignIn}
        

      />
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>

      {/* Redux-based Cart */}
      {isCartVisible && <Cart />}

      {/* Sign In Modal */}
      {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
    </>
  );
}

export default App;
