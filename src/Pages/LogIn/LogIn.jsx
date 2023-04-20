import React from "react";
import { Link } from "react-router-dom";
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
import "./LogIn.css";

function LogIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div id="login">
        <TextField
          fullWidth
          id="outlined-controlled"
          label="Summoner Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          variant="standard"
        />
        <FormControl variant="standard">
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
        <Link to={"/Gallery"}>
          <Button variant="contained" endIcon={<LoginIcon />}>
            To the Rift!
          </Button>
        </Link>
      </div>
    </>
  );
}

export default LogIn;
