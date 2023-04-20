import React, { useContext } from "react";
import "./Gallery.css";
import ChampionCard from "../ChampionCard/ChampionCard";
import { ContextComp } from "../../Context/Context";

function Gallery({ array }) {
  const { name, setName, avt, setavt } = useContext(ContextComp);
  return (
    <div className="gallery">
      {array.map((a, i) => (
        <ChampionCard key={a.id} info={a} index={i}></ChampionCard>
      ))}
    </div>
  );
}

export default Gallery;
