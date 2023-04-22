import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Example } from "../../Components/Carrousel/Carrousel";

import "./Champ.css";

import { ContextComp } from "../../Context/Context";

function Champ() {
  const { name, setName, avt, setavt, PRIVATE } = useContext(ContextComp);

  const { CHAMPCHAR } = useParams();
  const [character, setcharacter] = useState({});
  const [skins, setskins] = useState([]);
  useEffect(() => {
    charResult();
  }, [CHAMPCHAR]);

  const charResult = async () => {
    const result = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/champion/${CHAMPCHAR}.json`
    );

    setcharacter(...Object.values(result.data.data));
    setskins(Object.keys(result.data.data[CHAMPCHAR].skins));
  };

  return PRIVATE(
    <>
      <Example array={skins} card={character}></Example>
    </>
  );
}

export default Champ;
