import { IAction, ITrivia } from "@Interfaces";
import { UserAnswerActionConsts } from "../constants";
import { UserAnswerReducer } from ".";

describe("UserAnswerReducer", () => {
  it("should return the initial state", () => {
    expect(
      UserAnswerReducer(undefined, {} as IAction<ITrivia.Actions.IMapPayload>)
    ).toEqual({
      data: {},
    });
  });

  it("should handle RESET_USER_ANSWER", () => {
    expect(
      UserAnswerReducer(undefined, {
        type: UserAnswerActionConsts.RESET_USER_ANSWER,
      })
    ).toEqual({ data: {} });
  });

  it("should handle SET_USER_ANSWER", () => {
    expect(
      UserAnswerReducer(undefined, {
        type: UserAnswerActionConsts.SET_USER_ANSWER,
        payload: {
          data: {
            1: "True",
            2: "False"
          }
        }
      })
    ).toEqual({
      data: {
        1: "True",
        2: "False"
      }
    });
  });
});
