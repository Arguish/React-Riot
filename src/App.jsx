import { useState, useEffect } from "react";
import ChampionCard from "./Components/ChampionCard/ChampionCard";
import Gallery from "./Components/Gallery/Gallery";
import axios from "axios";

import "./App.css";

function App() {
  const [champions, setchampions] = useState([]);
  useEffect(() => {
    response();
  }, []);

  const response = async () => {
    const result = await axios.get(
      "http://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/champion.json"
    );
    console.log(result.data.data);
    console.log();
    setchampions(Object.values(result.data.data));
    console.log(champions);
  };

  return (
    <>
      <h2 className="navbar">Navbar</h2>
      <div>
        <Gallery array={champions}></Gallery>
      </div>
      <h2>Footer</h2>
    </>
  );
}

export default App;
