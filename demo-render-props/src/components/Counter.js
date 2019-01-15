import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timeId);
  }

  render() {
    return (
      // <div>{this.props.render(this.state.count)}</div>
      <div>{this.props.children(this.state)}</div>
    )
  }
}