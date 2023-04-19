import { useState, useEffect } from "react";
import ChampionCard from "./Components/ChampionCard/ChampionCard";
import Gallery from "./Components/Gallery/Gallery";
import Home from "../src/Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn.jsx";
import Champ from "./Pages/Champ/Champ.jsx";
import axios from "axios";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

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

    setchampions(Object.values(result.data.data));
  };

  return (
    <>
      <BrowserRouter>
        <h2 className="navbar">Navbar</h2>
        <Routes>
          <Route
            path="/Gallery"
            element={<Gallery array={champions}></Gallery>}
          ></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/Champ" element={<Champ></Champ>}></Route>
          <Route path="/" element={<LogIn></LogIn>}></Route>
        </Routes>
        <h6 style={{ position: "fixed", zIndex: "100" }}>Footer</h6>
      </BrowserRouter>
    </>
  );
}

export default App;
