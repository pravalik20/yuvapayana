import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Combine";
import Destination from "./Home/Destination ";
import Adventure from "./Home/Adventure";
import About from "./Home/About";
import Footer from "./Home/Footer";
import Login from "./Home/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destinations" element={<Destination />} />
        <Route path="/adventures" element={<Adventure />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;