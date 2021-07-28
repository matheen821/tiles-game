import { FC } from "react";
import { Button, Grid } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Control } from "../controls/control";
import { ControlNameEnum } from "../../../utils";
import { ControlContainer } from "../controls/style";

export const GameResult: FC<IStartButtonsProps> = (props) => {
  const {
    moves,
    bestMoves,
    isGameCompleted,
    isViewMovesMode,
    handleViewMoves,
    handleControlAction,
  } = props;

  return (
    <Grid className="game-result">
      {isGameCompleted && !isViewMovesMode && (
        <>
          <h3>
            Congratulations {moves === bestMoves && <i>Best Moves!!"</i>} 🎉
          </h3>
          <p>
            You have completed game in <strong>{moves}</strong> Moves!!
          </p>
        </>
      )}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="view-moves-section"
      >
        <Grid item lg={3} xs={6}>
          {(moves > 0 || isViewMovesMode) && (
            <Button
              onClick={handleViewMoves}
              variant="outlined"
              color="primary"
              className="view-moves-button"
              size="small"
            >
              <VisibilityIcon />
              {isViewMovesMode ? " Stop" : " View Moves"}
            </Button>
          )}
        </Grid>
        {isViewMovesMode && (
          <Grid item lg={2} xs={6}>
            <ControlContainer>
              <Control
                title="View Moves"
                count={moves}
                controlType={ControlNameEnum.ViewMoves}
                handleControlAction={handleControlAction}
              />
            </ControlContainer>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export interface IStartButtonsProps {
  moves: number;
  bestMoves: number;
  isGameCompleted: boolean;
  isViewMovesMode: boolean;
  handleViewMoves: () => void;
  handleControlAction: (count: number, controlType: ControlNameEnum) => void;
}
