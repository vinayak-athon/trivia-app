import { IStore } from "@Interfaces";
import { Dispatch } from "redux";
import { UserAnswerActionConsts } from "../constants";

export type TCurrentAnswer = { [key: string]: string };
export const UserAnswerAction = {
  SetAnswer: (currentAnswer: TCurrentAnswer ) => async (
    dispatch: Dispatch,
    getState: () => IStore
  ) => {
    const { data } = getState().userAnswer;
    return dispatch({
      payload: {
        data: {
          ...data,
          ...currentAnswer,
        },
      },
      type: UserAnswerActionConsts.SET_USER_ANSWER,
    });
  },
  ResetAnswers: () => async (dispatch: Dispatch) => {
    return dispatch({
      payload: {
        data: {},
      },
      type: UserAnswerActionConsts.RESET_USER_ANSWER,
    });
  },
};
