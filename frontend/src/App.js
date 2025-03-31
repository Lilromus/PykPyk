import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Kurier from './Kurier.jsx';
import Home from './Home.jsx';
import './LoginSignup.css';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/kurier" element={<Kurier />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;