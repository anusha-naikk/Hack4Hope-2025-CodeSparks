import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProfileSetup from "./components/ProfileSetup";
import "./App.css";

const App = () => {
  return (
    <Router basename="/Hack4Hope-2025-CodeSparks">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<ProfileSetup />} />
      </Routes>
    </Router>
  );
};

export default App;
