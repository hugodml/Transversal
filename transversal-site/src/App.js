import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './Login_Register/Login.js';
import Register from './Login_Register/Register.js';
import Home from './Home/Home.js';
import Order from './Order/Order.js';
import Settings from './Settings/Settings.js';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/order' element={<Order />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
