import React from "react";
import { useState, useEffect } from "react";

import Gallery from "./Components/Gallery/Gallery";
import Home from "../src/Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn.jsx";
import Champ from "./Pages/Champ/Champ.jsx";
import Error from "./Pages/Error/Error";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import axios from "axios";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ContextComp } from "./Context/Context";

import "./App.css";

function App() {
  const [champions, setchampions] = useState([]);
  const [champArray, setChampArray] = useState([]);
  useEffect(() => {
    response();
  }, []);

  const response = async () => {
    const result = await axios.get(
      "http://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/champion.json"
    );
    setChampArray(Object.keys(result.data.data));
    setchampions(Object.values(result.data.data));
  };
  const [name, setName] = React.useState("User");
  const [avt, setavt] = React.useState(
    "http://ddragon.leagueoflegends.com/cdn/13.8.1/img/passive/Teemo_P.png"
  );

  return (
    <>
      <ContextComp.Provider value={{ name, setName, avt, setavt, champArray }}>
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route
              path="/Gallery"
              element={<Gallery array={champions}></Gallery>}
            ></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/Champ/:CHAMPCHAR" element={<Champ></Champ>}></Route>
            <Route path="/" element={<LogIn></LogIn>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </ContextComp.Provider>
    </>
  );
}

export default App;
