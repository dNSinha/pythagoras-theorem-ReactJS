import React, { Component } from 'react';
import Box from 'Components/common/box';
import './style.scss';

const getParameter = (name, search) => {
  const match = RegExp('[?&]' + name + '=([^&]*)').exec(search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

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
    let search = this.props.history.location && this.props.history.location.search;
    let a = getParameter('a', search);
    let b = getParameter('b', search);
    let c = getParameter('c', search);
    let isTriplet = a ** 2 + b ** 2 === c ** 2;
    this.setState({
      perpendicular: a,
      base: b,
      hypotenuse: c,
      isTriplet
    });
  }


  render() {
    this.hypotenuseStyle = this.state.perpendicular < this.state.base ? 'rotate-more' : 'rotate-less';
    return (
      <div className="container large-container">
        {this.state.isTriplet ? <div>
          <div className={"hypotenuse " + this.hypotenuseStyle}>
            <Box value={this.state.hypotenuse} base={this.state.base} />
          </div>
          <div className="perpendicular">
            <Box value={this.state.perpendicular} css="blue" />
          </div>
          <div className="base">
            <Box value={this.state.base} css="green" />
          </div>
        </div> : <div>
            <p>Please enter a valid triplet For  egEg: a: 3, b: 4, c: 5</p>
          </div>}

      </div>
    );
  }
}

export default Home;