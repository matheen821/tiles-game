import { render } from "@testing-library/react";
import { MoveBox } from "./moveBox";

describe("Testing Move Box Component", () => {
  test("Moves should render", () => {
    const { container } = render(<MoveBox title="Moves" count={8} />);

    expect(container.querySelector(".moves-title")?.textContent).toEqual(
      "Moves"
    );
    expect(container.querySelector(".moves-count")?.textContent).toEqual("8");
  });
});
