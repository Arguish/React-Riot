import "./Nav.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  return (
    <div>
      <React.Fragment key={"top"}>
        {/* VV Boton VV */}
        <Button onClick={() => setState(!state)}>{"top"}</Button>
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
              <h1>Otro Algo</h1>
            </List>
            <Divider />
            <List>
              <h1>Algo</h1>
            </List>
            {/* AA Menu AA */}
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
