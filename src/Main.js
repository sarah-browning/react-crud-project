import React, { Component } from 'react';
import './App.css';
// import AddItemForm from './components/items/AddForm';
// import EditItemForm from './components/items/EditForm';
// import ItemTable from './components/items/Table';
// import AddCategoryForm from './components/categories/AddForm';
// import EditCategoryForm from './components/categories/EditForm';
// import CategoryTable from './components/categories/Table';
// import api from './api';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      editingItem: null
    };
  }

  // RENDER APP
  render() {
    return (
      <div className='Main'>
          <a href="/">Home</a>
          <br />
          <a href="/items">Items</a>
          <br />
          <a href='/categories'>Categories</a>
          <br />
      </div>
    );
  }
}

export default Main;
