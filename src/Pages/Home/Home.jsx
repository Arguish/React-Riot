import React from "react";

import { BrowserRouter } from "react-router-dom";

import Public from "../../Routes/Public";

function Home() {
  return (
    <BrowserRouter>
      <Public></Public>
    </BrowserRouter>
  );
}

export default Home;
