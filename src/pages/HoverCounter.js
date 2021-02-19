import React, { Component } from "react";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onMouseOver={incrementCount}> Hover {count} Times</button>;
  }
}

export default HoverCounter;
