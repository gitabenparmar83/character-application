import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../hooks/hooks";

const FooterComponent = () => {
  const lastVisited = useAppSelector((state) => state.characters?.lastVisited);
  const uniqueChar = new Set();
  lastVisited?.length > 0 &&
    lastVisited?.map((item: any) => uniqueChar.add(item?.character?.name));

  let uniqueArray = Array.from(uniqueChar);

  if (uniqueArray.length > 10) {
    uniqueArray = uniqueArray.slice(0, 10);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <div className="footer-name">
            {uniqueArray?.map((item: any) => {
              return (
                <div id={item}>
                  <Typography variant="body1" gutterBottom>
                    {item}
                  </Typography>
                </div>
              );
            })}
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default FooterComponent;
