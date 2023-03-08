import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
//first child that cointains...
class Character extends Component {
  render() {
    //destructuring an obj
    const {
      name,
      quote,
      image,
      characterDirection,
      onLikeToggle,
      liked,
      onDelete,
    } = this.props; // those data avoid to write this.props multiple times

    if (characterDirection === "Left") {
      return (
        <>
          <Name
            liked={liked}
            name={name}
            onLikeToggle={onLikeToggle}
            quote={quote}
            onDelete={onDelete}
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
