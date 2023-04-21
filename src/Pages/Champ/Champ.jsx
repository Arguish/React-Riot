import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Champ.css";

function Champ() {
  const { CHAMPCHAR } = useParams();
  const [character, setcharacter] = useState({});
  useEffect(() => {
    charResult();
  }, [CHAMPCHAR]);

  const charResult = async () => {
    const result = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/champion/${CHAMPCHAR}.json`
    );

    setcharacter(...Object.values(result.data.data));
  };

  return (
    <div
      style={{
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${character.id}_0.jpg)`,
      }}
      className="champPage"
    >
      <h1>{character.id}</h1>
      <h2>{character.title}</h2>
      <p>{character.lore}</p>
    </div>
  );
}

export default Champ;
