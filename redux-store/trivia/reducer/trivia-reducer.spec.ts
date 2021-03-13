import { IAction, ITrivia } from "@Interfaces";
import { TriviaActionConsts } from "../constants";
import { TriviaReducer } from ".";

describe("TriviaReducer", () => {
  it("should return the initial state", () => {
    expect(
      TriviaReducer(undefined, {} as IAction<ITrivia.Actions.IMapPayload>)
    ).toEqual({
      data: null,
      errors: null,
      fetching: false,
    });
  });

  it("should handle GET_TRIVIA_QUESTIONS_SUCCESS", () => {
    expect(
      TriviaReducer(undefined, {
        type: TriviaActionConsts.GET_TRIVIA_QUESTIONS_SUCCESS,
        payload: { data: { x: 123 } },
      })
    ).toEqual({
      data: { x: 123 },
      errors: null,
      fetching: false,
    });
  });

  it("should handle GET_TRIVIA_QUESTIONS_FAILURE", () => {
    expect(
      TriviaReducer(undefined, {
        type: TriviaActionConsts.GET_TRIVIA_QUESTIONS_FAILURE,
        payload: { errors: "Something went wrong" },
      })
    ).toEqual({
      data: null,
      errors: "Something went wrong",
      fetching: false,
    });
  });
});
