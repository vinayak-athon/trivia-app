import { combineReducers } from "redux";
import { TriviaReducer } from "@Redux/trivia/reducer";
import { UserAnswerReducer } from "@Redux/user-answer/reducer";

export default combineReducers({
  trivia: TriviaReducer,
  userAnswer: UserAnswerReducer,
});
