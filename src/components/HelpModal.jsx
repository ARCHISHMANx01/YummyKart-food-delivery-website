import React from "react";
import "./HelpModal.css";

const HelpModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="help-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Need Help?</h2>
        <p>📞 Call us at: <strong>1800-123-456</strong></p>
        <p>📧 Email: <strong>support@yummykart.in</strong></p>
        <p>💬 Chat: Available 24/7 in-app</p>
        <button className="return-btn" onClick={onClose}>Return to Home</button>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default HelpModal;
