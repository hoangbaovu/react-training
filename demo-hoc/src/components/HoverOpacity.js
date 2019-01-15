import React, {Component} from 'react';

export default class HoverOpacity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    }
  }

  onMouseEnter() {
    this.setState = {
      isHovered: true
    }
  }

  onMouseLeave() {
    this.setState = {
      isHovered: false
    }
  }

  render() {
    const { isHovered } = this.state;
    return (
      <div
        style={{
          opacity: isHovered ? .5 : 1
        }}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      >
        {this.props.children}
      </div>
    )
  }
}