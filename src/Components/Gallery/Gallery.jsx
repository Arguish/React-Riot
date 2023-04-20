import React from "react";
import "./Gallery.css";
import ChampionCard from "../ChampionCard/ChampionCard";

function Gallery({ array }) {
  return (
    <div className="gallery">
      {array.map((a, i) => (
        <ChampionCard key={a.id} info={a} index={i}></ChampionCard>
      ))}
    </div>
  );
}

export default Gallery;
