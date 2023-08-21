import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Button from "./components/button/button";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/services";
function App() {
  return (
    <>
      <Router>
      <div className="w-[90%] md:w-[100rem] bg-white m-auto text-black">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={{}} />
          <Route path="/contact" element={{}} />
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
