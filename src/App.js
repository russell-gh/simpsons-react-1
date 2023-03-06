import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    //fix the fact that the data has duplicats
    results.data.forEach((item) => {
      item.uniqueId = Math.random();
    });

    this.setState({ characters: results.data });
  };

  onDelete = (quote) => {
    const index = this.state.characters.findIndex((character) => {
      return character.quote === quote;
    });

    const characters = [...this.state.characters];

    characters.splice(index, 1);

    this.setState({ characters });
  };

  onLikeToggle = (quote) => {
    const index = this.state.characters.findIndex((character) => {
      return character.quote === quote;
    });

    const characters = [...this.state.characters];

    characters[index].liked = !characters[index].liked;

    this.setState({ characters });
  };

  onInput = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  onSort = (e) => {
    this.setState({ sortOrder: e.target.value });
  };

  render() {
    //if no data then show loading
    if (!this.state.characters) return <p>Loading.</p>;

    //remove characters that are now in the search term
    const filtered = this.state.characters.filter((character) => {
      return character.character
        .toLowerCase()
        .includes(
          this.state.searchTerm ? this.state.searchTerm.toLowerCase() : ""
        );
    });

    //calculate total likes
    let total = 0;
    filtered.forEach((character) => {
      if (character.liked) {
        total += 1;
      }
    });

    //sort the data
    if (this.state.sortOrder && this.state.sortOrder === "asc") {
      filtered.sort((item, nextItem) => {
        if (item.character > nextItem.character) return 1;
        if (item.character < nextItem.character) return -1;
      });
    } else if (this.state.sortOrder) {
      filtered.sort((item, nextItem) => {
        if (item.character > nextItem.character) return -1;
        if (item.character < nextItem.character) return 1;
      });
    }

    return (
      <>
        <div>
          <h3>Total characters liked: {total}</h3>
          <button onClick={this.getData}>Get new data</button>
          <label htmlFor="filter">Filter: </label>
          <input id="filter" type="text" onInput={this.onInput} />
          <label htmlFor="sort">Sort</label>
          <select id="sort" onChange={this.onSort}>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>
        <Characters
          characters={filtered}
          onLikeToggle={this.onLikeToggle}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}

export default App;
