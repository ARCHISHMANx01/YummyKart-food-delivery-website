import React, { useState } from "react";
import "./SignInModal.css";
import Lottie from "lottie-react";
import successAnimation from "../assets/success-check.json"; // Add this JSON in your assets

const SignInModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = () => {
    if (email.includes("@") && password.length > 0) {
      setSignedIn(true);
      setTimeout(() => {}, 1500); // just delay
    } else {
      alert("Please enter valid credentials!");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="signin-modal" onClick={(e) => e.stopPropagation()}>
        {!signedIn ? (
          <>
            <h2>
              Welcome to <span className="brand-text">YummyKart 🍽️</span>
            </h2>
            <p className="subtext">Sign-In And Unlock All Premium Features</p>

            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signin-input"
              required
            />
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signin-input"
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <button className="signin-btn" onClick={handleSignIn}>
              Sign In
            </button>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </>
        ) : (
          <div className="success-box">
            <Lottie animationData={successAnimation} loop={false} className="lottie-check" />
            <h3 className="success-msg">Signed in Successfully!</h3>
            <button className="return-home" onClick={onClose}>
              Return to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInModal;
