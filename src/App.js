import React, { Component } from "react";
import axios from "axios"; // without react won't work
import Characters from "./components/Characters"; // imp the father of the childs
import "./App.css";
class App extends Component {
  state = { searchTerm: "" };

  async componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );

    results.data.forEach((item) => {
      item.uniqueId = Math.random();
    }); //unique id

    this.setState({ characters: results.data }); // state is set on API data
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
    const index = this.state.characters.findIndex((characters) => {
      return characters.quote === quote;
    });
    const characters = [...this.state.characters];

    characters[index].liked = !characters[index].liked;

    this.setState({ characters });
  };

  onInput = (e) => {
    this.setState({ searchTerm: e.target.value }); //as u type the new state will be
  };

  onSort = (e) => {
    console.log(e.target.value);
    this.setState({ sortOrder: e.target.value });
  };
  render() {
    if (!this.state.characters) return <p>Loadging....</p>;

    //remove character that are now in the search term
    const filtered = this.state.characters.filter((character) => {
      // return character.character === this.state.searchTerm;//in this case will only show u a direct match
      return character.character
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase()); // now will gave u suggestion
    });

    //calculate likes
    let total = 0;
    filtered.forEach((charcater) => {
      if (charcater.liked) {
        total += 1;
      }
    }); //every time u want to calculate somthing  use it in the render

    //sortdata
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
        <div className="nav">
          <select>
            {this.state.characters.map((name) => {
              return <option key={name.quote}>{name.character}</option>;
            })}
          </select>
          <button onClick={this.getData}>Get new data</button>
          <label htmlFor="filter">Filter: </label>
          <input id="filter" type="text" onInput={this.onInput} />
          <h3>total likes ={total}</h3>
          <lable htmlFor="sort">Sort</lable>
          <select id="sort" onChange={this.onSort}>
            <option value="asc">ASC</option>
            <option value="dsc">DSC</option>
          </select>
        </div>
        <Characters
          characters={filtered}
          onLikeToggle={this.onLikeToggle}
          onDelete={this.onDelete}
          getTotal={this.getTotal}
          getData={this.getData}
        />
      </>
    );
  }
}

export default App;
