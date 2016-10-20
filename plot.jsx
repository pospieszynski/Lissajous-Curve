import React from 'react';
import ReactDOM from 'react-dom';

export default class Plot extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
       this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
        var i=9;
        var n=50;
        var y0=100;
        var x0=100;
        ctx.beginPath(x0,y0);
        var j;
        for(j=0;j<=2*Math.PI;j+=Math.PI/n/i){
           var  x=70*Math.sin(this.props.paramA*j);
            var y=70*Math.sin((this.props.paramB)*j);
            ctx.lineTo(x0+x,y0-y);
        }
        ctx.stroke();
    }

    render() {
        return (
            <div>
                <canvas ref="canvas" width={300} height={300}/>
            </div>
        );
    }
}

