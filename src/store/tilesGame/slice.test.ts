import { tilesGameReducer, tilesGameActions } from "./slice";
import { initialState } from "./initialState";

describe("Tiles Reducer Test Suite", () => {
  test("should return the initial state", () =>
    expect(tilesGameReducer(undefined, {})).toEqual(initialState));

  test("should start the game", () => {
    const previousState = initialState;
    expect(
      tilesGameReducer(previousState, tilesGameActions.startGame()).isGameStart
    ).toBeTruthy();
  });

  test("should create tiles", () => {
    const previousState = initialState;
    expect(
      tilesGameReducer(previousState, tilesGameActions.setSquare()).square
        .length
    ).toEqual(6);
  });

  test("should stop and reset game", () => {
    const previousState = initialState;
    const { isGameStart, moves, bestMoves, isGameCompleted } = tilesGameReducer(
      previousState,
      tilesGameActions.stopAndResetGame()
    );
    expect({ isGameStart, moves, bestMoves, isGameCompleted }).toEqual({
      isGameStart: false,
      moves: 0,
      bestMoves: 0,
      isGameCompleted: false,
    });
  });
});
