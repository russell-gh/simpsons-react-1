import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=20`
    );

    this.setState({ characters: results.data });
  }

  render() {
    if (!this.state.characters) return <p>Loading...</p>;

    return (
      <>
        <h1>Stuarts Simpsons App</h1>
        <Characters characters={this.state.characters} />
      </>
    );
  }
}

export default App;
