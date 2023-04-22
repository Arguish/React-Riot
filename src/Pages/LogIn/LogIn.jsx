import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { ContextComp } from "../../Context/Context";

import "./LogIn.css";
import axios from "axios";

function LogIn() {
  const { name, setName, avt, setavt, setIsLoged } = useContext(ContextComp);
  const [showPassword, setShowPassword] = React.useState(false);

  const [avticons, setavticons] = useState([]);
  const [pickicon, setpickicon] = useState("avtGallnot");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const icons = async () => {
    const result = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/profileicon.json`
    );

    setavticons(Object.keys(result.data.data));
  };

  useEffect(() => {
    icons();
  }, []);

  const navegacion = useNavigate();

  const loginSucces = () => {
    setIsLoged(true);
    navegacion("/Gallery", { replace: true });
  };

  return (
    <div id="logContainer">
      <div>
        <img
          style={{ width: "33vh" }}
          src="https://www.leagueoflegends.com/static/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png"
          alt=""
        />
      </div>
      <div id="login">
        <TextField
          fullWidth
          id="outlined-controlled"
          label="Summoner Name"
          value={name}
          onChange={(event) => {
            if (event.target.value.length < 13) {
              setName(event.target.value);
            }
          }}
          variant="standard"
        />
        <FormControl fullWidth variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button
          onClick={loginSucces}
          variant="contained"
          endIcon={<LoginIcon />}
        >
          To the Rift!
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        <h1 style={{ position: "absolute", top: "35%" }}>{name}</h1>
        <img
          onClick={() => setpickicon("avtGallok")}
          style={{
            width: "100px",
            borderRadius: "50%",
            boxShadow: "#00000050 5px 5px 3px 3px",
          }}
          src={avt}
          alt=""
        />

        <div id={pickicon}>
          {avticons.map((a) => (
            <img
              onClick={() => {
                setavt(
                  `http://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${a}.png`
                );
                setpickicon("avtGallnot");
              }}
              style={{
                width: "75px",
                borderRadius: "50%",
                boxShadow: "#00000050 2px 2px 1px 1px",
                margin: "1px",
              }}
              key={a}
              src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${a}.png`}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogIn;
