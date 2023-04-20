import "./Nav.css";

import { useState, useContext } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { ContextComp } from "../../Context/Context";
import { NavLink } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  const { name, setName, avt, setavt, champArray } = useContext(ContextComp);
  return (
    <div>
      <React.Fragment key={"top"}>
        {/* VV Boton VV */}
        <div id="User" onClick={() => setState(!state)}>
          <img src={avt} alt="" />
          <h3>{name}</h3>
        </div>
        {/* AA Boton AA */}
        <Drawer anchor={"top"} open={state} onClose={() => setState(!state)}>
          <Box
            sx={{ width: "top" }}
            role="presentation"
            onClick={() => setState(!state)}
            onKeyDown={() => setState(!state)}
          >
            {/* VV Menu VV */}
            <List>
              <nav>
                <NavLink to="/">Cerrar</NavLink>
                <NavLink to="/Gallery">Gallery</NavLink>
                <Divider></Divider>
                {champArray.map((a) => (
                  <NavLink to={`/Champ/${a}`}>{a}</NavLink>
                ))}
              </nav>
            </List>
            {/* AA Menu AA */}
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
