import React, { Component } from "react";

class Name extends Component {
  state = { liked: false };

  onLikeToggle = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const { name } = this.props;
    console.log(this.state.liked);
    return (
      <div>
        <h1>{name}</h1>
        <button
          style={{ backgroundColor: this.state.liked ? "red" : "blue" }}
          onClick={this.onLikeToggle}
        >
          Like/Dislike
        </button>
      </div>
    );
  }
}

export default Name;
