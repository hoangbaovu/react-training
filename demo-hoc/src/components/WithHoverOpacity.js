import React, {Component} from 'react';

export default function(WrappedComponent, opacity = 0.5) {
  return class extends Component {
    constructor(props) {
      super(props);
      console.log(this.props);
      this.state = {
        isHovered: false
      };
    }
  
    onMouseEnter() {
      console.log("enter");
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
      // const { isHovered } = this.state;
      return (
        <div
          style={{
            opacity: this.state.isHovered ? opacity : 1
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