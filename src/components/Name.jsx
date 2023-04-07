import React, { Component } from "react";

class Name extends Component {
  render() {
    console.log(this.props);
    const { name, liked, onLikeToggle, quote, onDelete } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <button
          style={{ backgroundColor: liked ? " #ffd90f" : "rgb(29, 144, 233)" }}
          onClick={() => onLikeToggle(quote)}>
          LIKE
        </button>
        <button class="buttonD" onClick={() => onDelete(quote)}>
          DELETE
        </button>
        {/**wrap anonymous when send data */}
      </div>
    );
  }
}

export default Name;
