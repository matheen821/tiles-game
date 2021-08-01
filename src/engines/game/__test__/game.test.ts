import { GameEngine } from "..";
import { ISquare } from "../../../store/tilesGame/types";

// Testing Game engine methods.
describe("Game engine Test Suite", () => {
  describe("should update origin for adjacent colors", () => {
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

    test("should be set origin for orange  adjacent color", () => {
      const gameEngine = new GameEngine(tiles, "orange");
      const newTiles = gameEngine.square;
      expect(newTiles[0][0]).toEqual({ color: "orange", origin: true });
      expect(newTiles[1][0]).toEqual({ color: "orange", origin: true });
      expect(newTiles[0][1]).toEqual({ color: "green", origin: false });
    });

    test("should be set origin for green  adjacent color", () => {
      const gameEngine = new GameEngine(tiles, "green");
      const newTiles = gameEngine.square;
      expect(newTiles[0][0]).toEqual({ color: "green", origin: true });
      expect(newTiles[0][1]).toEqual({ color: "green", origin: true });
      expect(newTiles[1][0]).toEqual({ color: "orange", origin: false });
    });

    test("should be set origin for red adjacent color", () => {
      const gameEngine = new GameEngine(tiles, "red");
      const newTiles = gameEngine.square;
      expect(newTiles[0][0]).toEqual({ color: "red", origin: true });
      expect(newTiles[0][1]).toEqual({ color: "green", origin: false });
      expect(newTiles[1][0]).toEqual({ color: "orange", origin: false });
    });

    test("should set origin for all colors and all tiles should be in single color", () => {
      let gameEngine = new GameEngine(tiles, "orange");
      gameEngine = new GameEngine(gameEngine.square, "red");
      gameEngine = new GameEngine(gameEngine.square, "green");
      gameEngine = new GameEngine(gameEngine.square, "blue");
      gameEngine = new GameEngine(gameEngine.square, "orange");

      const newTiles = gameEngine.square;
      expect(newTiles).toEqual([
        [
          { color: "orange", origin: true },
          { color: "orange", origin: true },
          { color: "orange", origin: true },
        ],
        [
          { color: "orange", origin: true },
          { color: "orange", origin: true },
          { color: "orange", origin: true },
        ],
        [
          { color: "orange", origin: true },
          { color: "orange", origin: true },
          { color: "orange", origin: true },
        ],
      ]);
    });
  });

  describe("game should be completed", () => {
    const tiles: ISquare[][] = [
      [
        { color: "blue", origin: true },
        { color: "green", origin: true },
      ],
      [
        { color: "orange", origin: true },
        { color: "red", origin: true },
      ],
    ];

    let gameEngine = new GameEngine(tiles, "orange");
    expect(gameEngine.isGameCompleted()).toBeTruthy();
  });

  describe("game should be not completed", () => {
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

    let gameEngine = new GameEngine(tiles, "orange");
    expect(gameEngine.isGameCompleted()).toBeFalsy();
  });
});
