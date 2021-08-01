import { Solver } from "..";
import { ISquare } from "../../store/tilesGame/types";

// Testing Game engine methods.
describe("Solver Test Suite", () => {
  describe("should auto solve and set origin for adjacent colors", () => {
    let tiles: ISquare[][];

    beforeEach(() => {
      tiles = [
        [
          { color: "blue", origin: true },
          { color: "green", origin: false },
          { color: "blue", origin: false },
        ],
        [
          { color: "orange", origin: false },
          { color: "red", origin: false },
          { color: "red", origin: false },
        ],
        [
          { color: "red", origin: false },
          { color: "orange", origin: false },
          { color: "red", origin: false },
        ],
      ];
    });

    test("should solve next step and set origin, should choose lowest among colors if tie between", () => {
      const newTiles = new Solver(tiles, false).tiles;
      expect(newTiles[0][0]).toEqual({ color: "green", origin: true });
      expect(newTiles[0][1]).toEqual({ color: "green", origin: true });
      expect(newTiles[1][0]).toEqual({ color: "orange", origin: false });
    });

    test("solve all and should set origin for all colors and all tiles should be in single color", () => {
      expect(new Solver(tiles).tiles).toEqual([
        [
          { color: "red", origin: true },
          { color: "red", origin: true },
          { color: "red", origin: true },
        ],
        [
          { color: "red", origin: true },
          { color: "red", origin: true },
          { color: "red", origin: true },
        ],
        [
          { color: "red", origin: true },
          { color: "red", origin: true },
          { color: "red", origin: true },
        ],
      ]);
    });
  });

  describe("solve next step and game should be not be completed", () => {
    const tiles: ISquare[][] = [
      [
        { color: "blue", origin: true },
        { color: "green", origin: false },
      ],
      [
        { color: "orange", origin: false },
        { color: "red", origin: false },
      ],
    ];

    expect(new Solver(tiles, false).isGameCompleted).toBeFalsy();
  });

  describe("auto solve all and game should be completed", () => {
    const tiles: ISquare[][] = [
      [
        { color: "blue", origin: true },
        { color: "green", origin: false },
      ],
      [
        { color: "orange", origin: false },
        { color: "red", origin: true },
      ],
    ];

    expect(new Solver(tiles).isGameCompleted).toBeTruthy();
  });
});
