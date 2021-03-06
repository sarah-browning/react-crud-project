import React, { Component } from 'react';
import './App.css';
import AddForm from './components/items/AddForm';
import EditForm from './components/items/EditForm';
import Table from './components/items/Table';
import api from './api';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      editingItem: null
    };
  }

  // LOAD ITEM ENTRIES
  componentDidMount() {
    api.fetchItems()
      .then(results => {
        this.setState({
          entries: results.data.items
        });
      })
      .catch(err => {
        console.log('Failed to retrieve items');
      });
  }

  // ADD ITEM ENTRY
  _addItemEntry = entry => {
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

  // EDIT ITEM ENTRY
  _editItemEntry = entry => {
    this.setState({
      editingItem: entry
    });
  }

  // UPDATE ITEM ENTRY
  _updateItemEntry = entry => {
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

  // DELETE ITEM ENTRY
  _deleteItemEntry = entry => {
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

  // RENDER ITEM PAGE
  render() {
    return (
      <div className='Item'>
          { this.state.editingItem ? (
            <EditForm onUpdateEntry={ this._updateItemEntry } editing={ this.state.editingItem } />
          ) : (
            <AddForm onAddEntry={ this._addItemEntry } />
          )}
          <br />
          <Table entries={ this.state.entries } onEditItem={this._editItemEntry} onDeleteItem={this._deleteItemEntry} />
      </div>
    );
  }
}

export default Item;
