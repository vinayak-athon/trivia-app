import { ITrivia } from "@Interfaces";

export interface IStore {
  trivia: ITrivia.IStateProps;
  userAnswer: ITrivia.IUserAnswer;
}
