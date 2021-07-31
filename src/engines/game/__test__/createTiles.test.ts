import { createTiles } from "../index";
import { generateRandomColors } from "../../../utils";

// Testing create tiles.
describe("Create tiles Test Suite", () => {
  describe("colors should be generated", () => {
    const colors = generateRandomColors(3);

    it("should be true", () => {
      expect(colors.length).toEqual(3);
    });
  });

  describe("createTiles should be generated", () => {
    const colors = generateRandomColors(3);
    const tiles = createTiles(4, 4, colors);

    it("should be true", () => {
      expect(tiles.length).toEqual(4);
      expect(tiles.flat(2).length).toEqual(16);
    });
  });

  describe("first tile(R0 * C0) should be origin", () => {
    const colors = generateRandomColors(3);
    const tiles = createTiles(2, 2, colors);

    it("origin should be true", () => {
      expect(tiles[0][0].origin).toBeTruthy();
    });
  });

  describe("any other tile should not be origin", () => {
    const colors = generateRandomColors(3);
    const tiles = createTiles(2, 2, colors);

    it("origin should be true", () => {
      expect(tiles[1][0].origin).toBeFalsy();
    });
  });
});
