import React, { FC } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { ControlNameEnum } from "../../../utils/enums";

export const Control: FC<IControlProps> = (props) => {
  const { title, count, controlType, handleControlAction } = props;

  return (
    <div className="control-section">
      <div className="control-title">{title}</div>
      <div className="control-body">
        <IconButton
          onClick={() => handleControlAction(-1, controlType)}
          color="primary"
          size="small"
        >
          {controlType === ControlNameEnum.ViewMoves ? (
            <SkipPreviousIcon />
          ) : (
            <RemoveIcon />
          )}
        </IconButton>
        <span className="control-count"> {count}</span>
        <IconButton
          onClick={() => handleControlAction(1, controlType)}
          color="primary"
          size="small"
        >
          {controlType === ControlNameEnum.ViewMoves ? (
            <SkipNextIcon />
          ) : (
            <AddIcon />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export interface IControlProps {
  title: string;
  count: number;
  controlType: ControlNameEnum;
  handleControlAction: (count: number, controlType: ControlNameEnum) => void;
}
