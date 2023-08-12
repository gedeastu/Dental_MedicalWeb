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
          <Route path="/services" element={{}} />
          <Route path="/about" element={{}} />
          <Route path="/contact" element={{}} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
