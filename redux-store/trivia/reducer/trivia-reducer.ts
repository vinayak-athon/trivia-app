import { IAction, ITrivia } from "@Interfaces";
import { TriviaActionConsts } from "../constants";

const INITIAL_STATE: ITrivia.IStateProps = {
  fetching: false,
  data: null,
  errors: null,
};

type IMapPayload = ITrivia.Actions.IMapPayload;

export const TriviaReducer = (
  state = INITIAL_STATE,
  action: IAction<IMapPayload>
) => {
  switch (action.type) {
    case TriviaActionConsts.GET_TRIVIA_QUESTIONS_SUCCESS:
    case TriviaActionConsts.GET_TRIVIA_QUESTIONS_FAILURE:
      return {
        ...INITIAL_STATE,
        ...state,
        ...action.payload,
      };
    case TriviaActionConsts.GET_TRIVIA_QUESTIONS_FETCHING:
      return {
        ...state,
        fetching: true,
      }
    case TriviaActionConsts.TRIVIA_QUESTIONS_RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};
