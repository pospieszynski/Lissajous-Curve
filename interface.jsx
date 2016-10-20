import React from 'react';
import ReactDOM from 'react-dom';

export default class Interface extends React.Component {





    render() {
        return (
            <div>
                <h3>x = <input type="text" size = {4} value={70}/>
                    sin( <input type="text" value={this.props.inputValueA} ref="paramA" size = {4} onChange={this.props.updateInputValueA} />t + q)
                </h3>

                <h3>y = <input type="text" size = {4} value={70}/>
                    sin( <input type="text" value={this.props.inputValueB} ref="paramB" size = {4} onChange={this.props.updateInputValueB} />t)
                </h3>
            </div>
        );
    }
}