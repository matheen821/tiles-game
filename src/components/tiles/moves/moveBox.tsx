import React, { FC } from "react";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import { Grid } from "@material-ui/core";

export const MoveBox: FC<IMoveBoxProps> = (props) => {
  const { title, count } = props;

  return (
    <Grid item lg={2} xs={4} className="moves-section">
      <div className="moves-title">
        {title === "Best" && <EmojiEventsIcon fontSize="small" />}
        {title}
      </div>
      <span className="moves-count">{count}</span>
    </Grid>
  );
};

export interface IMoveBoxProps {
  title: string;
  count: number;
}
