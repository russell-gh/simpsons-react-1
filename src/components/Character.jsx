import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

class Character extends Component {
  render() {
    const { name, quote, image, characterDirection } = this.props;

    if (characterDirection === "Left") {
      return (
        <>
          <Name name={name} />
          <Image image={image} name={name} />
          <Quote quote={quote} />
        </>
      );
    }

    return (
      <>
        <Name name={name} />
        <Quote quote={quote} />
        <Image image={image} name={name} />
      </>
    );
  }
}

export default Character;
