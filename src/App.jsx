import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import NavBar from './components/Admin/NavBar';

function Admin() {
  return (
    <div className='grid grid-cols-admin grid-rows-1 h-screen'>
      <ScrollRestoration />
      <NavBar />
      <Outlet />
    </div>
  );
}

function User() {
  return (
    <div>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </div>
  );
}

function App() {
  const location = useLocation();
  return location.pathname.includes('/admin') ? Admin() : User();
}

export default App;
