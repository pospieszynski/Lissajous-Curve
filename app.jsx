import React from 'react';
import ReactDOM from 'react-dom';
import Interface from './interface.jsx';
import Button from './button.jsx';
import Plot from './plot.jsx';


export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
            A: 3,
            B: 4,
            inputValueA: '',
            inputValueB: ''
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.updateInputValueA = this.updateInputValueA.bind(this);
        this.updateInputValueB = this.updateInputValueB.bind(this);
    }

    handleButtonClick(){
        this.setState({
            A: this.state.inputValueA,
            B: this.state.inputValueB
        });
    }

    updateInputValueA(evt) {
        this.setState({
            inputValueA: evt.target.value
        });
    }

    updateInputValueB(evt) {
        this.setState({
            inputValueB: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <p>In mathematics, a Lissajous curve is the graph of a system of parametric equations
                    which describe complex harmonic motion.
                    Fill in the parameters input and observe the output plot.
                </p>
                <Interface updateInputValueA={this.updateInputValueA} updateInputValueB={this.updateInputValueB}/>
                <Button handleButtonClick = {this.handleButtonClick}/>
                <Plot paramA={this.state.A} paramB={this.state.B}/>
            </div>
        );
    }
}