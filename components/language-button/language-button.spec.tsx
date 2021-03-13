import React from "react";
import { render } from "@Test/utils";
import { LanguageButton } from "@Components";

describe("Components", () => {
  describe("LanguageButton with isActive=true", () => {
    const { container } = render(
      <LanguageButton lang="en" isActive onClick={() => {}} />
    );

    it("should match snapshot", () => {
      expect(container).toMatchSnapshot();
    });
  });
});
