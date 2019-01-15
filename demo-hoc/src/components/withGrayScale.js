import React, { Component } from 'react';

export default function(WrappedComponent, value = 1) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHovered: false
      }
    }

    onMouseEnter() {
      this.setState({
        isHovered: true
      });
    }

    onMouseLeave() {
      console.log("leave");
      this.setState({
        isHovered: false
      });
    }

    render() {
      return (
        <div
          style={{
            filter: `grayscale(${value})`
          }}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
        >
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}