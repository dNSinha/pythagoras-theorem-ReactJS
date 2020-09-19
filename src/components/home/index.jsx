import React, { Component } from 'react';
import Box from 'Components/common/box';
import './style.scss';

export class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      perpendicular: 4,
      base:3
    }
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className="container large-container">
        <div className="perpendicular">
          <Box level={this.state.perpendicular} />
        </div>
        {/* <div className="hypt">
          <Box />
        </div> */}
        <div>
          <Box level={this.state.base} />
        </div>
      </div>
    );
  }
}

export default Home;