import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Placeorder from './pages/Placeorder';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';

const App = () => {

  // Authentication state
  const [login, setLogin] = useState(false);

  return (
    <div className="App">

      {/* Pass login state to Navbar */}
      <Navbar
        login={login}
        setLogin={setLogin}
      />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />

        <Route path="/collection" element={<Collection />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/product/:productId"
          element={<Product />}
        />

        <Route path="/cart" element={<Cart />} />

        {/* Pass setLogin to Login page */}
        <Route
          path="/login"
          element={<Login setLogin={setLogin} />}
        />

        <Route
          path="/placeorder"
          element={<Placeorder />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

      </Routes>

    </div>
  );
};

export default App;