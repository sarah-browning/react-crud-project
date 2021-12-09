import React, { Component } from "react";
import './Table.css';

class Table extends Component {     // creates and displays a Table component
    render() {
        return(
            <div>
                <table style={{ marginTop:16 }} border="1">
                    <thead> 
                        <tr>
                            <th className="id">#</th>
                            <th className="category_id">Category ID</th>
                            <th className="title">Item Title</th>
                            <th className="description">Item Description</th>
                            <th className="price">Item Price ($)</th>
                            <th className="quantity">Item Quantity</th>
                            <th className="sku">Item SKU</th>
                        </tr>
                    </thead>
                    <tbody>
                        { // loops through the entry data array and assign each an index
                            this.props.entries.map(
                                (entry, index) => (
                                    // uses the entry index to pull the information from the entry and display in the table
                                    <tr key={index}>
                                        <td className="id">{index + 1}</td>
                                        <td className="category_id">{entry.category_id}</td>
                                        <td className="title">{entry.title}</td>
                                        <td className="description">{entry.description}</td>
                                        <td className="price">{entry.price}</td>
                                        <td className="quantity">{entry.quantity}</td>
                                        <td className="sku">{entry.sku}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;       //exports component