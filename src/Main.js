import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return(
      <div>
        <h1>React CRUD Application</h1>
        <ul className='header'>
          <li><a href='/'>Home</a></li>
          <li><a href='/items'>Items</a></li>
          <li><a href='/categories'>Categories</a></li>
        </ul>
        <div className='content'>

        </div>
      </div>
    )
    
  }
}

export default Main;
