import React from "react";
import { render, cleanup, act } from "@Test/utils";
import * as ReactRedux from "react-redux";
import { AnswerOptions } from "@Components";

afterAll(cleanup);
jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { id: "1" },
    push: jest.fn(),
  }),
}));

jest.mock("@Server/i18n", () => ({
  useTranslation: () => ({
    t: x => x,
  }),
}));

describe("Components", () => {
  describe("AnswerOptions", () => {
    const dispatch = jest.fn();
    jest
      .spyOn(ReactRedux, "useDispatch")
      .mockImplementation(() => jest.fn().mockReturnValue({ dispatch }));
    const { container } = render(<AnswerOptions />);
    it("should match snapshot", async () => {
      expect(container).toMatchSnapshot();
    });
  });
});
