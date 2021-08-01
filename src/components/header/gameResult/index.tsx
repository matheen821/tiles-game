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
    totalRecordedMoves,
    isGameCompleted,
    isViewMovesMode,
    isSolveAll,
    handleViewMoves,
    handleControlAction,
  } = props;

  return (
    <Grid className="game-result">
      {isGameCompleted && !isViewMovesMode && (
        <>
          <h3 data-testid="success-message">
            {isSolveAll ? "Its Done👍" : "Congratulations"}{" "}
            {totalRecordedMoves === bestMoves && <i>Best Moves!!"</i>} 🎉
          </h3>
          <p>
            {isSolveAll ? "Computer" : "You have"} solved this game in{" "}
            <strong>{totalRecordedMoves}</strong> Moves!!
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
              data-testid="view-or-stop-moves-button"
            >
              <VisibilityIcon />
              {isViewMovesMode ? " Stop" : " View Moves"}
            </Button>
          )}
        </Grid>
        {isViewMovesMode && (
          <Grid item lg={2} xs={6}>
            <ControlContainer data-testid="view-moves-control">
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
  totalRecordedMoves: number;
  isGameCompleted: boolean;
  isViewMovesMode: boolean;
  isSolveAll: boolean;
  handleViewMoves: () => void;
  handleControlAction: (count: number, controlType: ControlNameEnum) => void;
}
