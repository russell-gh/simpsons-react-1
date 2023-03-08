import React, { Component } from "react";
import Character from "./Character";
// father
class Characters extends Component {
  render() {
    const { characters, onLikeToggle, onDelete } = this.props;

    return characters.map((item, index) => {
      return (
        <div className="character" key={item.uniqueId}>
          <Character
            liked={item.liked}
            name={item.character}
            image={item.image}
            quote={item.quote}
            characterDirection={item.characterDirection}
            onDelete={onDelete}
            onLikeToggle={onLikeToggle}
          />
        </div>
      );
    });
  }
}

export default Characters;
