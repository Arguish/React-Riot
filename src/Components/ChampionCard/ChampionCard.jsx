import React from "react";
import { Link } from "react-router-dom";
import "./ChampionCard.css";

const prettierText = (str) => {
  if (str === "Mage") {
    return "🪄";
  } else if (str === "Assassin") {
    return "🔪";
  } else if (str === "Tank") {
    return "🛡";
  } else if (str === "Fighter") {
    return "🥊";
  } else if (str === "Marksman") {
    return "🏹";
  } else if (str === "Support") {
    return "❤️‍🩹";
  } else {
    return str;
  }
};

function ChampionCard({ info }) {
  const logChamp = () => {
    console.log(info);
  };
  return (
    <>
      <Link to={`/Champ/${info.id}`}>
        <div
          className="championCard"
          style={{
            backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${info.id}_0.jpg)`,
          }}
          onClick={logChamp}
        >
          <div>
            <h2>{info.id}</h2>
          </div>
          <p>
            <h5>{info.title}</h5>
            {info.tags.map((a) => {
              return (
                <span style={{ fontSize: "30px" }}>{prettierText(a)}</span>
              );
            })}
          </p>
        </div>
      </Link>
    </>
  );
}

export default ChampionCard;
