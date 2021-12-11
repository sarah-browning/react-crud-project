import React from 'react';
import { Link } from 'react-router-dom';
// import {Route, NavLink, HashRouter } from "react-router-dom";
import './App.css';
// import Item from './Item';
// import Category from './Category';

export default function App() {
  return (
    <div className='header'>
      <h1>React CRUD Application</h1>
      <nav>
        <Link to="/items">Items</Link> |{" "} 
        <Link to="/categories">Categories</Link>
      </nav>
      <div>
        App Goes Here!
      </div>
    </div>
  );
}