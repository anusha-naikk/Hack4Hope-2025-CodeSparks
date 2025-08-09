import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router v6 hook
import "./ProfileSetup.css";

const ProfileSetup = () => {
  const [cancerType, setCancerType] = useState("");
  const [stage, setStage] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Pass profile data to next screen (trial results)
    navigate("/trials", { state: { cancerType, stage, age, gender } });
  };

  return (
    <div className="profile-container">
      <h1>Profile Setup</h1>

      <label>Cancer Type</label>
      <input
        type="text"
        value={cancerType}
        onChange={(e) => setCancerType(e.target.value)}
        placeholder="Enter cancer type"
      />

      <label>Stage of Cancer</label>
      <select value={stage} onChange={(e) => setStage(e.target.value)}>
        <option value="">Select Stage</option>
        <option value="Stage 1">Stage 1</option>
        <option value="Stage 2">Stage 2</option>
        <option value="Stage 3">Stage 3</option>
        <option value="Stage 4">Stage 4</option>
      </select>

      <label>Age</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />

      <label>Gender</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <button className="submit-button" onClick={handleSubmit}>
        Find My Trial
      </button>
    </div>
  );
};

export default ProfileSetup;
