import React from "react";
import "./Gallery.css";
import ChampionCard from "../ChampionCard/ChampionCard";

function Gallery({ array }) {
  return (
    <div className="gallery">
      {array.map((a) => (
        <ChampionCard key={a.id} info={a}></ChampionCard>
      ))}
    </div>
  );
}

export default Gallery;
