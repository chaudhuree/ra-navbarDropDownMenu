import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Components/pages/Services";
import Products from "./Components/pages/Products";
import ContactUs from "./Components/pages/ContactUs";
import SignUp from "./Components/pages/SignUp";
import Marketing from "./Components/pages/Marketing";
import Consulting from "./Components/pages/Consulting";
import Home from "./Components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/consulting" element={<Consulting />} />
      </Routes>
    </Router>
  );
}

export default App;
