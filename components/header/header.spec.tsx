import React from "react";
import { render, cleanup } from "@Test/utils";
import { Header } from "@Components";

afterAll(cleanup);

describe("Components", () => {
  describe("Header", () => {
    const { container } = render(<Header />);
    it("should match snapshot", () => {
      expect(container).toMatchSnapshot();
    });
  });
});
