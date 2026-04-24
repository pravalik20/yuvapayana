import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Combine";
import Destination from "./Home/Destination ";
import Adventure from "./Home/Adventure";
import About from "./Home/About";
import Footer from "./Home/Footer";
import Login from "./Home/Login";

// Package Pages
import Wayanad from "./Home/Packages/Wayanad";

import UttariBetta from "./Home/Packages/Uttari-betta";
import Kabbaldurga from "./Home/Packages/Kabbaldurga";
import Coorg from "./Home/Packages/Coorg";
import Ooty from "./Home/Packages/Ooty";
import Skandagiri from "./Home/Packages/Skandagiri";
import Shivagange from "./Home/Packages/Shivagange";

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

        {/* Package Routes */}
        <Route path="/wayanad" element={<Wayanad />} />
        <Route path="/uttari-betta" element={<UttariBetta />} />
        <Route path="/kabbaldurga" element={<Kabbaldurga />} />
        <Route path="/coorg" element={<Coorg />} />
        <Route path="/ooty" element={<Ooty />} />
        <Route path="/skandagiri" element={<Skandagiri />} />
        <Route path="/shivagange" element={<Shivagange />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;