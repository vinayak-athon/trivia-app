import { createMockStore } from "@Test/utils";
import { UserAnswerAction } from "@Redux/actions";
import { UserAnswerActionConsts } from "../constants";

const store = createMockStore({ userAnswer: { data: {} } });
store.getState = () => ({
  userAnswer: {
    data: {},
  },
});

afterEach(() => {
  store.clearActions();
});

describe("UserAnswerAction", () => {
  test("SetAnswer", async () => {
    const expectedActions = [
      {
        payload: {
          data: { 1: "False" },
        },
        type: UserAnswerActionConsts.SET_USER_ANSWER,
      },
    ];

    await store.dispatch<any>(UserAnswerAction.SetAnswer({ "1": "False" }));

    expect(store.getActions()).toEqual(expectedActions);
  });
  test("ResetAnswers", async () => {
    const expectedActions = [
      {
        payload: {
          data: {},
        },
        type: UserAnswerActionConsts.RESET_USER_ANSWER,
      },
    ];

    await store.dispatch<any>(UserAnswerAction.ResetAnswers());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
