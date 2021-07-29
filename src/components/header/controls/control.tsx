import React, { FC } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
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
            <RemoveIcon />
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
            <PlayArrowIcon />
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
