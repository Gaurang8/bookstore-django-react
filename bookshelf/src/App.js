import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Saved from './pages/Saved';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
