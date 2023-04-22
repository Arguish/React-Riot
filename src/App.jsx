import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Home from "../src/Pages/Home/Home";
import { ContextComp } from "./Context/Context";

import "./App.css";

function App() {
  const [champions, setchampions] = useState([]);
  const [champArray, setChampArray] = useState([]);
  const [name, setName] = React.useState("User");
  const [avt, setavt] = React.useState(
    "http://ddragon.leagueoflegends.com/cdn/13.8.1/img/passive/Teemo_P.png"
  );
  const [isloged, setIsLoged] = useState(false);

  useEffect(() => {
    response();
  }, []);

  const response = async () => {
    const result = await axios.get(
      "http://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/champion.json"
    );
    setChampArray(Object.keys(result.data.data));
    setchampions(Object.values(result.data.data));
  };

  return (
    <>
      <ContextComp.Provider
        value={{
          name,
          setName,
          avt,
          setavt,
          champArray,
          champions,
          isloged,
          setIsLoged,
        }}
      >
        <Home></Home>
      </ContextComp.Provider>
    </>
  );
}

export default App;
