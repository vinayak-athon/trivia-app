import * as React from "react";
import { render } from "@Test/utils";
import { Heading } from "@Components";

describe("Components", () => {
  describe("Heading", () => {
    it("should render given text", () => {
      const { getAllByText } = render(<Heading text="This is a heading" />);

      expect(getAllByText("This is a heading").length).toEqual(1);
    });

    it("should match snapshot", () => {
      const { container } = render(<Heading text="Toxic" />);

      expect(container).toMatchSnapshot();
    });
  });
});
