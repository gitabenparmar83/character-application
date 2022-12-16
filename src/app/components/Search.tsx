import React, { KeyboardEvent } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useNavigate } from "react-router-dom";

export default function InputAdornments() {
  const navigate = useNavigate();
  const [Radiovalue, setValue] = React.useState("name");
  const [text, setText] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText((event.target as HTMLInputElement).value);
  };
  const handleKeyboardEvent = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === "Enter") {
      setText((e.target as HTMLInputElement).value);
      navigate(`/search/${Radiovalue}/${(e.target as HTMLInputElement).value}`);
    }
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div className="search-compo">
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Search..</InputLabel>
          <FilledInput
            onKeyPress={handleKeyboardEvent}
            id="filled-adornment-password"
            value={text}
            onChange={handleChangeEvent}
            type="search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={Radiovalue}
          onChange={handleChange}
        >
          <FormControlLabel value="name" control={<Radio />} label="Name" />
          <FormControlLabel value="status" control={<Radio />} label="Status" />
          <FormControlLabel
            value="species"
            control={<Radio />}
            label="Species"
          />
          <FormControlLabel value="type" control={<Radio />} label="Type" />
          <FormControlLabel value="gender" control={<Radio />} label="Gender" />
        </RadioGroup>
      </div>
    </Box>
  );
}
