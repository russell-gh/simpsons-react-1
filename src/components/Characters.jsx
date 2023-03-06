import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  render() {
    const { characters, onLikeToggle, onDelete } = this.props;

    return characters.map((item) => {
      return (
        <div className="character" key={item.uniqueId}>
          <Character
            liked={item.liked}
            name={item.character}
            quote={item.quote}
            image={item.image}
            characterDirection={item.characterDirection}
            onLikeToggle={onLikeToggle}
            onDelete={onDelete}
          />
        </div>
      );
    });
  }
}

export default Characters;
