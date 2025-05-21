import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Kurier from './Kurier.jsx';
import Partner from './Partner.jsx';
import Home from './Home.jsx';
import Home_logged from './Home_logged.jsx';
import EditProfile from './Edit_profile.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/kurier" element={<Kurier />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/home" element={<Home_logged />} />
            <Route path="/editprofile" element={<EditProfile />} />
        </Routes>
    );
}

export default App;
