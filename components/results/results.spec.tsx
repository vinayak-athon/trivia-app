import React from "react";
import { render, cleanup } from "@Test/utils";
import { Results } from "@Components";

afterAll(cleanup);

describe("Components", () => {
  describe("Results", () => {
    const { container } = render(<Results />);
    it("should match snapshot", () => {
      expect(container).toMatchSnapshot();
    });
  });
});
