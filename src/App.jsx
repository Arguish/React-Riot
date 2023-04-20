import React from "react";
import { useState, useEffect } from "react";

import Gallery from "./Components/Gallery/Gallery";
import Home from "../src/Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn.jsx";
import Champ from "./Pages/Champ/Champ.jsx";
import Error from "./Pages/Error/Error";
import Nav from "./Components/Nav/Nav";
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
          <h6
            style={{
              paddingTop: "20px",
              bottom: "0px",
              zIndex: "100",
              fontSize: "8px",
              textAlign: "center",
              color: "#303030",
            }}
          >
            MIT License Copyright (c) 2023 Javier Hernandez Gonzalez Permission
            is hereby granted, free of charge, to any person obtaining a copy of
            this software and associated documentation files (the "Software"),
            to deal in the Software without restriction, including without
            limitation the rights to use, copy, modify, merge, publish,
            distribute, sublicense, and/or sell copies of the Software, and to
            permit persons to whom the Software is furnished to do so, subject
            to the following conditions: The above copyright notice and this
            permission notice shall be included in all copies or substantial
            portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT
            WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
            TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
            COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
            ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
            OR OTHER DEALINGS IN THE SOFTWARE.
          </h6>
        </BrowserRouter>
      </ContextComp.Provider>
    </>
  );
}

export default App;
