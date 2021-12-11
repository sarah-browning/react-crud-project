import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// import {Route, NavLink, HashRouter } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <div className='header'>
      <h1>React CRUD Application</h1>
      <nav className='nav'>
        <Link to="/">Home</Link> |{" "} 
        <Link to="/items">Items</Link> |{" "} 
        <Link to="/categories">Categories</Link>
      </nav>
      <br />
      <Outlet />
    </div>
  );
}