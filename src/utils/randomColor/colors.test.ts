import { generateRandomColors } from ".";

describe("should generate colors", () => {
  const colors = generateRandomColors(3);

  it("should be true", () => {
    expect(colors.length).toEqual(3);
  });
});
