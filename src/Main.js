import React, { Component } from 'react';
import './App.css';
import AddItemForm from './components/items/AddForm';
import EditItemForm from './components/items/EditForm';
import ItemTable from './components/items/Table';
// import AddCategoryForm from './components/categories/AddForm';
// import EditCategoryForm from './components/categories/EditForm';
// import CategoryTable from './components/categories/Table';
import api from './api';
/* 
    For this project, you will create the CRUD functionality for an inventory system.
    You will create the functionality to add, edit, and delete items and item categories.
        For categories, you will just require the category name (and id which will be managed via an auto incrementing primary key).
        For items, you will be required to store the category_id, title, description, price, quantity, and sku,
    Your app should start by displaying a page of links (one to manage categories and one to manage items).
    Use react router to load the content for each management area.
 */
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
      <div className='App'>
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
