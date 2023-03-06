import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

class Character extends Component {
  render() {
    const {
      onDelete,
      name,
      quote,
      image,
      characterDirection,
      onLikeToggle,
      liked,
    } = this.props;

    if (characterDirection === "Left") {
      return (
        <>
          <Name
            liked={liked}
            name={name}
            onLikeToggle={onLikeToggle}
            onDelete={onDelete}
            quote={quote}
          />
          <Image image={image} name={name} />
          <Quote quote={quote} />
        </>
      );
    }

    return (
      <>
        <Name
          liked={liked}
          name={name}
          onLikeToggle={onLikeToggle}
          quote={quote}
          onDelete={onDelete}
        />
        <Quote quote={quote} />
        <Image image={image} name={name} />
      </>
    );
  }
}

export default Character;
