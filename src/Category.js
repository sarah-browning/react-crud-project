import React, { Component } from 'react';
import './Main.css';
import AddForm from './components/categories/AddForm';
import EditForm from './components/categories/EditForm';
import CategoryTable from './components/categories/Table';
import api from './api';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      editingItem: null
    };
  }

  // LOAD CATEGORY ENTRIES
  componentDidMount() {
    api.fetchCategories()
      .then(results => {
        this.setState({
          entries: results.data.categories
        });
      })
      .catch(err => {
        console.log('Failed to retrieve categories.')
      });
    }

    // ADD CATEGORY ENTRY
    _addCategoryEntry = entry => {
      api.addCategory(entry)
        .then(result => {
          console.log('result.data.category: '+JSON.stringify(result.data.category));
          this.setState({
            entries: [...this.state.entries, result.data.category]
          });
        })
        .then(()=>{
          console.log(this.state.entries);
        })
        .catch( err => {
          console.log ('Failed to add category to database');
          throw err;
        });
    }
  
    // EDIT CATEGORY ENTRY
    _editCategoryEntry = entry => {
      this.setState({
        editingCategory: entry
      });
    }
  
    // UPDATE CATEGORY ENTRY
    _updateCategoryEntry = entry => {
      api.updateCategory(entry)
         .then( () => {
           this.setState({
              editingCategory: null,
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
            console.log ('Failed to update category');
            throw err;
         });
    }
  
    // DELETE CATEGORY ENTRY
    _deleteCategoryEntry = entry => {
      api.deleteCategory(entry)
         .then( () => {
           this.setState({
             entries: [...this.state.entries].filter( i => i.id !== entry.id )
           });
         })
         .catch( err => {
          console.log ('Failed to delete category');
          throw err;
       });
    }

  // RENDER APP
  render() {
    return (
      <div className='Category'>
          <a href="/">Home</a>
          <br />
          <a href="/items">Items</a>
          <br />
          <a href='/categories'>Categories</a>
          <br />
          { this.state.editingCategory ? (
            <EditForm onUpdateEntry={ this._updateCategoryEntry } editing={ this.state.editingCategory } />
          ) : (
            <AddForm onAddEntry={ this._addCategoryEntry } />
          )}
          <br />
          <CategoryTable entries={ this.state.entries } onEditCategory={this._editCategoryEntry} onDeleteCategory={this._deleteCategoryEntry} />
      </div>
    );
  }
}

export default Category;