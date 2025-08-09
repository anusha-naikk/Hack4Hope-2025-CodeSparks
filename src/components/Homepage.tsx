import React from "react";
import { useNavigate } from "react-router-dom"; // React Router v6 hook
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();
  console.log("HOmepage rendered");

  const handleFindMyTrial = () => {
    navigate("/profile"); // Navigate to Profile Setup
  };

  return (
    <div className="container">
      <h1>Trialify: Your 1-Stop Solution</h1>
      <button className="button" onClick={handleFindMyTrial}>
        Find My Trial
      </button>
    </div>
  );
};

export default Homepage;
