import "./Nav.css";

import { useContext } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { ContextComp } from "../../Context/Context";
import { NavLink, useNavigate } from "react-router-dom";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  const { name, avt, champArray, setIsLoged } = useContext(ContextComp);

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const navegacion = useNavigate();

  const exit = () => {
    setIsLoged(false);
    setState(!state);
    navegacion("/", { replace: true });
  };

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
            id="menu"
            sx={{ width: "top" }}
            role="presentation"
            onKeyDown={() => setState(!state)}
          >
            {/* VV Menu VV */}
            <List>
              <nav>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button onClick={() => exit()}>LogOut</Button>
                  <NavLink onClick={() => setState(!state)} to="/Logged">
                    Gallery
                  </NavLink>
                </div>
                {/*  */}
                <MuiAccordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <MuiAccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    style={{
                      backgroundColor: "#212121",
                      color: "antiquewhite",
                    }}
                  >
                    <Typography>Champions</Typography>
                  </MuiAccordionSummary>
                  <MuiAccordionDetails>
                    <div id="champlist">
                      {champArray.map((a) => (
                        <NavLink
                          className="champlink"
                          key={a}
                          to={`/Gallery/${a}`}
                        >
                          <Avatar
                            onClick={() => setState(!state)}
                            alt={a}
                            src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/${a}.png`}
                            sx={{ width: 30, height: 30 }}
                          />
                        </NavLink>
                      ))}
                    </div>
                  </MuiAccordionDetails>
                </MuiAccordion>
                {/*  */}
              </nav>
            </List>
            {/* AA Menu AA */}
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
