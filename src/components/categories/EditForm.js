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

    // Displays the EditForm
    render() { 
        return ( 
            <div>
                <label>Title</label>
                <input type="text" placeholder="Enter Title" value={this.state.title} onChange={
                    event => this._handleTextChange('title', event.target.value)
                } />
                <br />
                <Button title="Update Item" onClick={ this._update } />
            </div>
        );
    }
}

// Export component
export default EditForm;