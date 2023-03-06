import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [simpsons, setSimpsons] = useState([]);

  const getApiData = async () => {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    setSimpsons(results.data);
  };

  useEffect(() => {
    getApiData();
  }, []); //run once

  return (
    <>
      {simpsons.map((item) => {
        return <p>{item.character}</p>;
      })}
    </>
  );
};

export default App;
