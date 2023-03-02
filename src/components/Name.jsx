import React, { Component } from "react";

class Name extends Component {
  render() {
    const { name } = this.props;

    return <h1>{name}</h1>;
  }
}

export default Name;
