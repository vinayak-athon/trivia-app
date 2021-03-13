declare namespace IOpentdb {
  interface IResults {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }
  export interface Response {
    response_code: number;
    results: IResults[];
  }
}

export { IOpentdb };
