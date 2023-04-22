import React from "react";
import { useState, useEffect, useContext } from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Public from "../../Routes/Public";
import Privates from "../../Routes/Privates";

function Home() {
  return (
    <BrowserRouter>
      <Public></Public>
    </BrowserRouter>
  );
}

export default Home;
