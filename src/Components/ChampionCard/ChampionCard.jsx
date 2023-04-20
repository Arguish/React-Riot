import React from "react";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SecurityIcon from "@mui/icons-material/Security";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ColorizeIcon from "@mui/icons-material/Colorize";
import HealingIcon from "@mui/icons-material/Healing";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Grow } from "@mui/material";

import "./ChampionCard.css";

const prettierText = (str) => {
  if (str === "Mage") {
    return <AutoFixHighIcon></AutoFixHighIcon>;
  } else if (str === "Assassin") {
    return <ColorizeIcon></ColorizeIcon>;
  } else if (str === "Tank") {
    return <SecurityIcon></SecurityIcon>;
  } else if (str === "Fighter") {
    return <FitnessCenterIcon></FitnessCenterIcon>;
  } else if (str === "Marksman") {
    return <AdsClickIcon></AdsClickIcon>;
  } else if (str === "Support") {
    return <HealingIcon></HealingIcon>;
  } else {
    return str;
  }
};

function ChampionCard({ info, index }) {
  const logChamp = () => {
    console.log(info);
  };
  return (
    <>
      <Grow in="true" timeout={100 + 50 * index}>
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
              <Stack direction="row" spacing={-2} justifyContent="center">
                {info.tags.map((a) => {
                  return (
                    <Chip
                      style={{
                        transform: "scale(0.66)",
                        backgroundColor: "antiquewhite",
                        boxShadow: "#121212 2px 1px 1px 2px",
                      }}
                      label={prettierText(a)}
                      size="medium"
                      avatar={
                        <Avatar
                          src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/${info.id}.png`}
                        />
                      }
                    />
                  );
                })}
              </Stack>
            </p>
          </div>
        </Link>
      </Grow>
    </>
  );
}

export default ChampionCard;
