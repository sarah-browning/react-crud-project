import React from 'react';
import AddForm from './components/items/AddForm';
// import Table from './components/categories/Table';
/* 
    For this project, you will create the CRUD functionality for an inventory system.
    You will create the functionality to add, edit, and delete items and item categories.
        For categories, you will just require the category name (and id which will be managed via an auto incrementing primary key).
        For items, you will be required to store the category_id, title, description, price, quantity, and sku,
    Your app should start by displaying a page of links (one to manage categories and one to manage items).
    Use react router to load the content for each management area.
 */
class App extends React.Component {
  render() {
    return (
      <div className='App'>
          <a href="/items">Items</a>
          <br />
          <a href='/categories'>Categories</a>
          <br />
          <AddForm />
      </div>
    );
  }
}

export default App;
