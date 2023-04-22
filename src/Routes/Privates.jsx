import React from "react";
import { useState, useEffect, useContext } from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { ContextComp } from "../Context/Context";

import Gallery from "../Components/Gallery/Gallery";
import Champ from "../Pages/Champ/Champ.jsx";
import Error from "../Pages/Error/Error";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

function Privates() {
  const { name, setName, avt, setavt, champArray, champions } =
    useContext(ContextComp);
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route
          path="/Gallery"
          element={<Gallery array={champions}></Gallery>}
        ></Route>
        <Route path="/Gallery/:CHAMPCHAR" element={<Champ></Champ>}></Route>

        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default Privates;
