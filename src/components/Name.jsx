import React from "react";

const Name = (props) => {
  const { name, liked, onLikeToggle, quote, onDelete } = props;

  return (
    <div>
      <h1>{name}</h1>
      <button
        style={{ backgroundColor: liked ? "red" : "blue" }}
        onClick={() => onLikeToggle(quote)}
      >
        Like/Dislike
      </button>
      <button onClick={() => onDelete(quote)}>Delete</button>
    </div>
  );
};

export default Name;
