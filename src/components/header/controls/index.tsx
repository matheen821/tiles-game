import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import { ControlNameEnum } from "../../../utils";
import { ControlContainer } from "./style";
import { Control } from "./control";

export const Controls: FC<IControlsProps> = (props) => {
  const { colorsCount, rows, cols, handleControlAction } = props;

  return (
    <ControlContainer>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item lg={2} xs={3}>
          <Control
            title="Rows"
            count={rows}
            controlType={ControlNameEnum.Rows}
            handleControlAction={handleControlAction}
          />
        </Grid>
        <Grid item lg={2} xs={3}>
          <Control
            title="Cols"
            count={cols}
            controlType={ControlNameEnum.Cols}
            handleControlAction={handleControlAction}
          />
        </Grid>
        <Grid item lg={2} xs={3}>
          <Control
            title="Colors"
            count={colorsCount}
            controlType={ControlNameEnum.Colors}
            handleControlAction={handleControlAction}
          />
        </Grid>
      </Grid>
    </ControlContainer>
  );
};

export interface IControlsProps {
  colorsCount: number;
  rows: number;
  cols: number;
  handleControlAction: (count: number, controlType: ControlNameEnum) => void;
}
