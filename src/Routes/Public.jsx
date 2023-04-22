import React from "react";
import { useState, useEffect, useContext } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { ContextComp } from "../Context/Context.jsx";

import LogIn from "../Pages/LogIn/LogIn.jsx";
import Footer from "../Components/Footer/Footer";
import Error from "../Pages/Error/Error.jsx";
import Privates from "./Privates.jsx";

function Public() {
  const { name, setName, avt, setavt, isloged, setIsLoged } =
    useContext(ContextComp);
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn></LogIn>}></Route>
        <Route path="/*" element={<Privates></Privates>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default Public;
