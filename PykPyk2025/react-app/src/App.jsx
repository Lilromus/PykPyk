import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Kurier from './Kurier.jsx';
import Partner from './Partner.jsx';
import Home from './Home.jsx';
import HomeLogged from './Home_logged';
import EditProfile from './Edit_profile';
import Restaurant from './Restaurant.jsx';
import Cart from './Cart.jsx';


function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kurier" element={<Kurier />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/home" element={<HomeLogged />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/restaurant/:restaurantId" element={<Restaurant />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
