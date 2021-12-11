import React, { Component } from "react";
import '../css/Table.css';

class Table extends Component {
    render() {
        return(
            <div>
                <table className="itemTable">
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
                        {
                            this.props.entries.map(
                                (entry, index) => (
                                    <tr key={index}>
                                        <td className="id">{index + 1}</td>
                                        <td className="category_id">{entry.category_id}</td>
                                        <td className="title">{entry.title}</td>
                                        <td className="description">{entry.description}</td>
                                        <td className="price">{entry.price}</td>
                                        <td className="quantity">{entry.quantity}</td>
                                        <td className="sku">{entry.sku}</td>
                                        <td className="button"><button onClick={() => this.props.onEditItem(entry)}>Edit</button></td>
                                        <td className="button"><button onClick={() => this.props.onDeleteItem(entry)}>Delete</button></td>
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
// Export Component
export default Table;