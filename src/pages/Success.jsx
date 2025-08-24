import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import "./Success.css"; // ✅ Import your CSS file

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 100,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 100,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <div className="success-container">
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Thank you for choosing <strong>YummyKart</strong>.</p>
      <button className="return-btn" onClick={() => navigate("/")}>
        Return to Home
      </button>
    </div>
  );
};

export default Success;
