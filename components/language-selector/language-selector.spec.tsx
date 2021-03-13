import React from "react";
import { render, cleanup } from "@Test/utils";
import { LanguageSelector } from "@Components";

afterAll(cleanup);

describe("Components", () => {
  describe("LanguageSelector lang=en", () => {
    const { container } = render(<LanguageSelector />);
    it("should match snapshot", () => {
      expect(container).toMatchSnapshot();
    });
  });
});
