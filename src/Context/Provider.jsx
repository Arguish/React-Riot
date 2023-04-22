import React from "react";
import { useState, useEffect } from "react";
import { ContextComp } from "./Context";
import axios from "axios";

function Provider({ children }) {
  const [champions, setchampions] = useState([]);
  const [champArray, setChampArray] = useState([]);
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
  const [name, setName] = React.useState("User");
  const [avt, setavt] = React.useState(
    "http://ddragon.leagueoflegends.com/cdn/13.8.1/img/passive/Teemo_P.png"
  );
  return (
    <ContextComp.Provider
      value={{ name, setName, avt, setavt, champArray, champions }}
    >
      {children}
    </ContextComp.Provider>
  );
}

export default Provider;
