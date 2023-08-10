import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Home/>} />
          <Route path="/about" element={<Home/>} />
          <Route path="/contact" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
