import React from "react";

const PageTwo = ({ onNext }) => {
  return (
    <div 
      className="container page-enter" 
      style={{ 
        background: "linear-gradient(135deg, rgba(255,0,0,0.1), rgba(255,192,203,0.3))" 
      }}
    >
      {/* Character */}
      <div className="wiggle" style={{ fontSize: "6rem", marginBottom: "1rem" }}>🥰</div>

      <h1 className="font-handwriting title-main">
        OMG, you said yes!
      </h1>

      {/* Cards */}
      <div className="options-grid">
        <div className="option-card">
          <span style={{ fontSize: "2.5rem" }}>📷</span>
          <span style={{ fontWeight: 600 }}>Photo</span>
        </div>
        <div className="option-card">
          <span style={{ fontSize: "2.5rem" }}>💌</span>
          <span style={{ fontWeight: 600 }}>Love Letter</span>
        </div>
        <div className="option-card">
          <span style={{ fontSize: "2.5rem" }}>🎁</span>
          <span style={{ fontWeight: 600 }}>Gift</span>
        </div>
      </div>

      <button onClick={onNext} className="btn btn-primary">
        Next 💕
      </button>
    </div>
  );
};

export default PageTwo;