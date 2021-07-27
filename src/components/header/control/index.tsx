import React, { FC } from "react";
import { Grid, Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { TilesRowsAndColsEnum } from "../../../utils";

export const Control: FC<IControlProps> = (props) => {
  const { rows, cols, handleRowsAndColsChange } = props;

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item lg={1}>
        <p>Rows</p>
        <IconButton
          onClick={() => handleRowsAndColsChange(-1, TilesRowsAndColsEnum.Rows)}
          color="primary"
          size="small"
        >
          <RemoveIcon />
        </IconButton>
        {rows}
        <IconButton
          onClick={() => handleRowsAndColsChange(1, TilesRowsAndColsEnum.Rows)}
          color="primary"
          size="small"
        >
          <AddIcon />
        </IconButton>
      </Grid>
      <Grid item lg={1}>
        <p>Cols</p>
        <IconButton
          onClick={() => handleRowsAndColsChange(-1, TilesRowsAndColsEnum.Cols)}
          color="primary"
          size="small"
        >
          <RemoveIcon />
        </IconButton>
        {cols}
        <IconButton
          onClick={() => handleRowsAndColsChange(1, TilesRowsAndColsEnum.Cols)}
          color="primary"
          size="small"
        >
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export interface IControlProps {
  rows: number;
  cols: number;
  handleRowsAndColsChange: (count: number, type: TilesRowsAndColsEnum) => void;
}
