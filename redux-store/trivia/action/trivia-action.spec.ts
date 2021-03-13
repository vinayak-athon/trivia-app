import { createMockStore } from "@Test/utils";
import { TriviaAction } from "./trivia-action";
import { TriviaActionConsts } from "../constants";

const store = createMockStore();

afterEach(() => {
  store.clearActions();
});

describe("TriviaAction", () => {
  test("GetQuestions", async () => {
    const expectedActions = [
      {
        type: TriviaActionConsts.GET_TRIVIA_QUESTIONS_FETCHING,
      },
      {
        payload: {
          data: {
            response_code: 0,
            results: [
              {
                category: "Vehicles",
                type: "boolean",
                difficulty: "hard",
                question:
                  "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
                correct_answer: "True",
                incorrect_answers: ["False"],
              },
              {
                category: "Entertainment: Film",
                type: "boolean",
                difficulty: "hard",
                question:
                  "&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.",
                correct_answer: "False",
                incorrect_answers: ["True"],
              },
              {
                category: "Entertainment: Video Games",
                type: "boolean",
                difficulty: "hard",
                question:
                  "All of these maps were in &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; on its initial release: House, Clubhouse, Border, Consulate.",
                correct_answer: "False",
                incorrect_answers: ["True"],
              },
              {
                category: "Entertainment: Television",
                type: "boolean",
                difficulty: "hard",
                question: "The Klingon home planet is Qo&#039;noS.",
                correct_answer: "True",
                incorrect_answers: ["False"],
              },
              {
                category: "General Knowledge",
                type: "boolean",
                difficulty: "hard",
                question:
                  "Stagecoach owned &quot;South West Trains&quot; before losing the rights to FirstGroup and MTR in March of 2017.",
                correct_answer: "True",
                incorrect_answers: ["False"],
              },
              {
                category: "Science: Mathematics",
                type: "boolean",
                difficulty: "hard",
                question:
                  "L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.",
                correct_answer: "False",
                incorrect_answers: ["True"],
              },
              {
                category: "Entertainment: Music",
                type: "boolean",
                difficulty: "hard",
                question:
                  "The song Scatman&#039;s World was released after Scatman (Ski-Ba-Bop-Ba-Dop-Bop).",
                correct_answer: "True",
                incorrect_answers: ["False"],
              },
              {
                category: "Entertainment: Japanese Anime & Manga",
                type: "boolean",
                difficulty: "hard",
                question:
                  "The character Plum from &quot;No Game No Life&quot; is a girl.",
                correct_answer: "False",
                incorrect_answers: ["True"],
              },
              {
                category: "History",
                type: "boolean",
                difficulty: "hard",
                question:
                  "The man that shot Alexander Hamilton was named Aaron Burr.",
                correct_answer: "True",
                incorrect_answers: ["False"],
              },
              {
                category: "Science: Computers",
                type: "boolean",
                difficulty: "hard",
                question:
                  "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
                correct_answer: "True",
                incorrect_answers: ["False"],
              },
            ],
          },
        },
        type: TriviaActionConsts.GET_TRIVIA_QUESTIONS_SUCCESS,
      },
    ];

    await store.dispatch(TriviaAction.GetQuestions());
    expect(store.getActions()).toEqual(expectedActions);
  });
  test("ResetQuestions", async () => {
    const expectedActions = [
      {
        type: TriviaActionConsts.TRIVIA_QUESTIONS_RESET,
      },
    ];
    await store.dispatch(TriviaAction.ResetQuestions());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
