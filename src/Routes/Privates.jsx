import React from "react";
import { useContext } from "react";

import { Route, Routes } from "react-router-dom";

import { ContextComp } from "../Context/Context";

import Gallery from "../Pages/Gallery/Gallery";
import Champ from "../Pages/Champ/Champ.jsx";
import Error from "../Pages/Error/Error";
import Nav from "../Components/Nav/Nav";

function Privates() {
  const { champions } = useContext(ContextComp);
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
