import { IAction, ITrivia } from "@Interfaces";
import { UserAnswerActionConsts } from "../constants";

const INITIAL_STATE: ITrivia.IUserAnswer = {
  data: {},
};

type IMapPayload = ITrivia.Actions.IMapPayload;

export const UserAnswerReducer = (
  state = INITIAL_STATE,
  action: IAction<IMapPayload>
) => {
  switch (action.type) {
    case UserAnswerActionConsts.SET_USER_ANSWER:
      return {
        ...INITIAL_STATE,
        ...state,
        ...action.payload,
      };
    case UserAnswerActionConsts.RESET_USER_ANSWER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
