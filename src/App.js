import React, { Component } from 'react';
import './App.css';
import AddItemForm from './components/items/AddForm';
import EditItemForm from './components/items/EditForm';
import ItemTable from './components/items/Table';
import api from './api';
/* 
    For this project, you will create the CRUD functionality for an inventory system.
    You will create the functionality to add, edit, and delete items and item categories.
        For categories, you will just require the category name (and id which will be managed via an auto incrementing primary key).
        For items, you will be required to store the category_id, title, description, price, quantity, and sku,
    Your app should start by displaying a page of links (one to manage categories and one to manage items).
    Use react router to load the content for each management area.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      editingItem: null
    };
  }

  // LOAD ENTRIES
  componentDidMount() {
    api.fetchItems()
      .then(results => {
        this.setState({
          entries: results.data.items
        });
      })
      .catch(err => {
        console.log('Failed to retrieve the items');
      });
  }

  // ADD ENTRY
  _addEntry = entry => {
    api.addItem(entry)
      .then(result => {
        console.log('result.data.item: '+JSON.stringify(result.data.item));
        this.setState({
          entries: [...this.state.entries, result.data.item]
        });
      })
      .then(()=>{
        console.log(this.state.entries);
      })
      .catch( err => {
        console.log ('Failed to add to database');
        throw err;
      });
  }

  // EDIT ENTRY
  _editEntry = entry => {
    this.setState({
      editingItem: entry
    });
  }

  // UPDATE ENTRY
  _updateEntry = entry => {
    api.updateItem(entry)
       .then( () => {
         this.setState({
            editingItem: null,
            entries: [...this.state.entries].map(i => {
              if (i.id === entry.id) {
                return entry;
              } else {
                return i;
              }
            })
         });
       })
       .catch( err => {
          console.log ('Failed to update item');
          throw err;
       });
  }

  // DELETE ENTRY
  _deleteEntry = entry => {
    api.deleteItem(entry)
       .then( () => {
         this.setState({
           entries: [...this.state.entries].filter( i => i.id !== entry.id )
         });
       })
       .catch( err => {
        console.log ('Failed to delete item');
        throw err;
     });
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

          { this.state.editingItem ? (
            <EditItemForm onUpdateEntry={ this._updateEntry } editing={ this.state.editingItem } />
          ) : (
            <AddItemForm onAddEntry={ this._addEntry } />
          )}
          <br />
          <ItemTable entries={ this.state.entries } onEditItem={this._editEntry} onDeleteItem={this._deleteEntry} />
      </div>
    );
  }
}

export default App;
