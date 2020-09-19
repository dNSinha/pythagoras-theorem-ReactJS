import React, { Component } from 'react';
import './style.scss';

export class Box extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sample: 'hi'
        }
        this.showTriangle = this.showTriangle.bind(this);
        this.showBoxes = this.showBoxes.bind(this);
        this.boxes = [];
        this.boxesArray = [];
    }

    showBoxes() {
        for (let i = 0; i < this.props.level; i++) {
            this.boxes.push(<div className="box"></div>);
        }
        return this.boxes;
    }

    showTriangle() {
        for (let j = 0; j < this.props.level; j++) {
            this.boxesArray.push(<div className="inline">
                {this.showBoxes()}
            </div>)
        }
        return this.boxesArray;
    }

    render() {
        return (
            <div>
                {/* {this.props.level.map((index) => (
                    <div className="inline" key={index}>
                        {this.props.level.map((id) => {
                            <div className="box" key={id}></div>
                        })}
                    </div>
                ))} */}

                {this.showTriangle()}

                {/* <div className="inline">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
                <div className="inline">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
                <div className="inline">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div> */}
            </div>
        );
    }
}

export default Box;