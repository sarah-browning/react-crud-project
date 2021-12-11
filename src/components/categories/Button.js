import React, { Component } from "react";
import "../css/Button.css";

class Button extends Component {
    render() {
        return(
            <div>
                <button className="button" onClick={ this.props.onClick }>{ this.props.title }</button>
            </div>
        );
    }
}

export default Button;