import { render } from "@testing-library/react";
import { Moves } from ".";

describe("Testing Moves Component", () => {
  test("Moves should render", () => {
    const { container } = render(<Moves moves={10} bestMoves={7} />);
    expect(container).toBeTruthy();
  });
});
