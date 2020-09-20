import React, { Component } from 'react';
import './style.scss';

export class Box extends React.Component {

    constructor(props) {
        super(props)
        this.showTriangle = this.showTriangle.bind(this);
        this.showBoxes = this.showBoxes.bind(this);
        this.boxes = [];
        this.boxesArray = [];
    }

    showBoxes(j) {
        this.boxes = [];
        for (let i = 0; i < this.props.value; i++) {
            let color = this.props.base ? this.props.base > i && this.props.base > j ? 'green' : 'blue' : this.props.css;
            this.boxes.push(<div className={"box " + color}></div>);
        }
        return this.boxes;
    }

    showTriangle() {
        for (let j = 0; j < this.props.value; j++) {
            this.boxesArray.push(<div className="inline">
                {this.showBoxes(j)}
            </div>)
        }
        return this.boxesArray;
    }

    render() {
        return (
            <div>
                {this.showTriangle()}
            </div>
        );
    }
}

export default Box;