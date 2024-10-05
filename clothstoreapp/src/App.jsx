import React from "react";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import MenProduct from "./Pages/MenProduct";
import WomenProduct from "./Pages/WomenProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mens" element={<MenProduct />} />     
        <Route path="/women" element={<WomenProduct />} />       
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
