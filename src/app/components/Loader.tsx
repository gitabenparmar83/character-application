import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";


export default function LoaderComponent(props:any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(props.number * 1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Skeleton sx={{ minHeight : 245 , minWidth : 345}} variant="rounded"  />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
