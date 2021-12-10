import React, { Component } from "react";
import './Table.css';

class Table extends Component {
    render() {
        return(
            <div>
                <table>
                    <thead> 
                        <tr>
                            <th className="id">#</th>
                            <th className="title">Category Title</th>
                            <th className="edit">Edit</th>
                            <th className="delete">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.entries.map(
                                (entry, index) => (
                                    <tr key={index}>
                                        <td className="id">{index + 1}</td>
                                        <td className="title">{entry.title}</td>
                                        <td><button onClick={() => this.props.onEditItem(entry)}>Edit</button></td>
                                        <td><button onClick={() => this.props.onDeleteItem(entry)}>Delete</button></td>
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