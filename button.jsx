import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component {
    render() {
        return (
            <button type="button" onClick={this.props.handleButtonClick}>Plot</button>
        );
    }
}