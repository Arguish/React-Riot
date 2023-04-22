import React, { useContext } from "react";
import "./Gallery.css";
import ChampionCard from "../../Components/ChampionCard/ChampionCard";
import { ContextComp } from "../../Context/Context";

function Gallery({ array }) {
  const { PRIVATE } = useContext(ContextComp);

  return PRIVATE(
    <div className="gallery">
      {array.map((a, i) => (
        <ChampionCard key={a.id} info={a} index={i}></ChampionCard>
      ))}
    </div>
  );
}

export default Gallery;
