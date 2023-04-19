import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Champ.css";

const CHAMPCHAR = "Aatrox";

function Champ() {
  const [character, setcharacter] = useState({});
  useEffect(() => {
    charResult();
  }, []);

  const charResult = async () => {
    const result = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/champion/${CHAMPCHAR}.json`
    );
    console.log(result.data.data);
    console.log();
    setcharacter(...Object.values(result.data.data));
    console.log(character);
  };

  return (
    <div
      style={{
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${character.id}_0.jpg)`,
      }}
      className="champPage"
    >
      <h1>Aatrox</h1>
      <h2>{character.title}</h2>
      <p>{character.lore}</p>
    </div>
  );
}

export default Champ;
