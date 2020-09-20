import React, { Component } from 'react';
import Box from 'Components/common/box';
import './style.scss';

export class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      perpendicular: 3,
      base: 4,
      hypotenuse: 5
    }
    this.hypotenuseStyle = null;
  }

  componentDidMount() {
    
  }


  render() {
    this.hypotenuseStyle = this.state.perpendicular < this.state.base ? 'rotate-more' : 'rotate-less';
    return (
      <div className="container large-container">
        <div className={"hypotenuse " + this.hypotenuseStyle}>
          <Box value={this.state.hypotenuse} base={this.state.base} />
        </div>
        <div className="perpendicular">
          <Box value={this.state.perpendicular} css="blue" />
        </div>
        <div className="base">
          <Box value={this.state.base} css="green" />
        </div>
      </div>
    );
  }
}

export default Home;