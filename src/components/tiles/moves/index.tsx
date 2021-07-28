import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import { MoveBox } from "./moveBox";
import { MovesContainer } from "./style";

export const Moves: FC<IMovesProps> = (props) => {
  const { moves, bestMoves } = props;

  return (
    <MovesContainer>
      <Grid container justifyContent="center" alignItems="center">
        <MoveBox title="Moves" count={moves} />
        <MoveBox title="Best" count={bestMoves || moves} />
      </Grid>
    </MovesContainer>
  );
};

export interface IMovesProps {
  moves: number;
  bestMoves: number;
}
