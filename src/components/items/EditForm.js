import React, { Component } from 'react';
import Button from './Button';
import '../css/Form.css';

//  Initializes constructor and sets object state
class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.editing
        }
    }

    // Updates entry in state array and then clears values
    _update = () => {
        console.log('_update fired');
        // console.log('_update ' + JSON.stringify(this.state));
        this.props.onUpdateEntry(this.state);
        this._clear();
    }

    // Clears and resets stored values
    _clear = () => {
        console.log('_clear fired');
        this.setState({
            category_id: '',
            title: '',
            description: '',
            price: '',
            quantity: '',
            sku: '' });
    }

    // Detects when a field changes and store the value
    _handleTextChange = (key, value) => {
        console.log('_handleTextChange fired');
        this.setState({
            [key]: value
        });
    }

    // Displays the EditForm
    render() { 
        return ( 
            <div className='editForm'>
                <label>Category ID</label>
                <input type="text" placeholder="Enter Category ID" value={this.state.category_id} onChange={
                    event => this._handleTextChange('category_id', event.target.value)
                } />
                <br />
                <label>Title</label>
                <input type="text" placeholder="Enter Title" value={this.state.title} onChange={
                    event => this._handleTextChange('title', event.target.value)
                } />
                <br />
                <label>Description</label>
                <input type="text" placeholder="Enter Description" value={this.state.description} onChange={
                    event => this._handleTextChange('description', event.target.value)
                } />
                <br />
                <label>Price ($)</label>
                <input type="text" placeholder="Enter Price ($)" value={this.state.price} onChange={
                    event => this._handleTextChange('price', event.target.value)
                }/>
                <br />
                <label>Quantity</label>
                <input type="text" placeholder="Enter Quantity" value={this.state.quantity} onChange={
                    event => this._handleTextChange('quantity', event.target.value)
                }/>
                <br />
                <label>SKU</label>
                <input type="text" placeholder="Enter SKU" value={this.state.sku} onChange={
                    event => this._handleTextChange('sku', event.target.value)
                 }/>
                 <br />
                 <Button title="Update Item" onClick={ this._update } />
            </div>
        );
    }
}

// Export component
export default EditForm;