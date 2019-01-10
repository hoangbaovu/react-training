import React, { Component } from "react";
import classNames from 'classnames';

import './TrafficLight.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: GREEN
    };

    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      })
    }, 1000);
  }

  getNextColor(color) {
    switch(color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
    const { currentColor } = this.state;

    return <div className="TrafficLight">
      <div className={classNames('bulb', 'red', {
        active: currentColor === RED
      })}></div>
      <div className={classNames('bulb', 'orange', {
        active: currentColor === ORANGE
      })}></div>
      <div className={classNames('bulb', 'green', {
        active: currentColor === GREEN
      })}></div>
    </div>;
  }
}

export default TrafficLight;