import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  render() {
    const { characters } = this.props;

    return characters.map((item, index) => {
      return (
        <div className="character" key={item.quote + item.name}>
          <Character
            name={item.character}
            quote={item.quote}
            image={item.image}
            characterDirection={item.characterDirection}
          />
        </div>
      );
    });
  }
}

export default Characters;
