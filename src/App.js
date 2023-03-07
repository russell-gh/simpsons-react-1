import React, { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./components/Characters";

const App = () => {
  const [characters, setCharacters] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [sortOrder, setSortOrder] = useState("asc");
  //above is state

  const getApiData = async () => {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    results.data.forEach((item) => {
      item.uniqueId = Math.random();
    });

    setCharacters(results.data);
  };

  useEffect(() => {
    getApiData();
  }, []); //run once.

  const onDelete = (quote) => {
    const index = characters.findIndex((character) => {
      return character.quote === quote;
    });

    const _characters = [...characters];

    _characters.splice(index, 1);

    setCharacters(_characters);
  };

  const onLikeToggle = (quote) => {
    const index = characters.findIndex((character) => {
      return character.quote === quote;
    });

    const _characters = [...characters];

    _characters[index].liked = !_characters[index].liked;

    setCharacters(_characters);
  };

  const onInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSort = (e) => {
    setSortOrder(e.target.value);
  };

  //if no data then show loading
  if (!characters) return <p>Loading.</p>;

  //remove characters that are now in the search term
  const filtered = characters.filter((character) => {
    return character.character
      .toLowerCase()
      .includes(searchTerm ? searchTerm.toLowerCase() : "");
  });

  //calculate total likes
  let total = 0;
  filtered.forEach((character) => {
    if (character.liked) {
      total += 1;
    }
  });

  //sort the data
  if (sortOrder && sortOrder === "asc") {
    filtered.sort((item, nextItem) => {
      if (item.character > nextItem.character) return 1;
      if (item.character < nextItem.character) return -1;
      return 0;
    });
  } else if (sortOrder) {
    filtered.sort((item, nextItem) => {
      if (item.character > nextItem.character) return -1;
      if (item.character < nextItem.character) return 1;
      return 0;
    });
  }

  return (
    <>
      <div>
        <h3>Total characters liked: {total}</h3>
        <button onClick={getApiData}>Get new data</button>
        <label htmlFor="filter">Filter: </label>
        <input id="filter" type="text" onInput={onInput} />
        <label htmlFor="sort">Sort</label>
        <select id="sort" onChange={onSort}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
      <Characters
        characters={filtered}
        onLikeToggle={onLikeToggle}
        onDelete={onDelete}
      />
    </>
  );
};

export default App;
