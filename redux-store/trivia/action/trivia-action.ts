import { Dispatch } from "redux";
import { Opentdb } from "@Services";
import { TriviaActionConsts } from "../constants";

export const TriviaAction = {
  ResetQuestions: () => async (dispatch: Dispatch) => {
    return dispatch({
      type: TriviaActionConsts.TRIVIA_QUESTIONS_RESET,
    });
  },
  GetQuestions: () => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: TriviaActionConsts.GET_TRIVIA_QUESTIONS_FETCHING,
      });
      const data = await Opentdb.Get({
        amount: 10,
        difficulty: "hard",
        type: "boolean",
      });

      dispatch({
        payload: { data },
        type: TriviaActionConsts.GET_TRIVIA_QUESTIONS_SUCCESS,
      });
    } catch (errors) {
      dispatch({
        payload: { errors },
        type: TriviaActionConsts.GET_TRIVIA_QUESTIONS_FAILURE,
      });
    }
  },
};
