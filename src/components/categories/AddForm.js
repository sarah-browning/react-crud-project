import React, { Component } from 'react';
import Button from './Button';
import '../css/Form.css';

//  Initializes constructor and sets object state
class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
          };
    }

    // Adds entry to state array and then clears values
    _add = () => {
        console.log('_add fired');
        // console.log('_add ' + JSON.stringify(this.state));
        this.props.onAddEntry(this.state);
        this._clear();
    }

    // Clears and resets stored values
    _clear = () => {
        console.log('_clear fired');
        this.setState({
            title: ''
        });
    }

    // Detects when a field changes and store the value
    _handleTextChange = (key, value) => {
        console.log('_handleTextChange fired');
        this.setState({
            [key]: value
        });
    }

    // Displays the AddForm
    render() { 
        return ( 
            <div>
                <label>Title</label>
                <input type="text" placeholder="Enter Title" value={this.state.title} onChange={
                    event => this._handleTextChange('title', event.target.value)
                } />
                <br />
                <Button title="Add Category" onClick={ this._add } />
            </div>
        );
    }
}

// Export component
export default AddForm;