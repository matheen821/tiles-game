import { createTiles, GameEngine } from "..";
import { generateRandomColors } from "../../../utils";

// Testing Game engine methods.
describe("Game engine Test Suite", () => {
  describe("should generate colors", () => {
    const colors = generateRandomColors(3);
    const tiles = createTiles(4, 4, colors);
    const gameEngine = new GameEngine(tiles, colors[0]);
    gameEngine.updateOrigin();

    it("should be true", () => {
      expect(colors.length).toEqual(3);
    });
  });
});
