import React from "react";
import Character from "./Character";

const Characters = (props) => {
  const { characters, onLikeToggle, onDelete } = props;

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
};

export default Characters;
