import React from "react";
import { Header } from "./header";
import { Tiles } from "./tiles";
import { TilesGameContainer } from "./style";
import { Grid } from "@material-ui/core";

export const TilesGame = () => {
  return (
    <TilesGameContainer>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item lg={6} xs={12} className="left-item-container">
          <Header />
        </Grid>
        <Grid item lg={6} xs={12} className="right-item-container">
          <Tiles />
        </Grid>
      </Grid>
    </TilesGameContainer>
  );
};
