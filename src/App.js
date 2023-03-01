import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {};

  async componentDidMount() {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    this.setState({ simpsons: results.data });
  }

  render() {
    console.log(this.state);

    //if data is here, loop over the data
    //think defensive check

    return <h1>Waiting for data....</h1>;
  }
}

export default App;
