import { UserAnswerActionConsts } from ".";

describe("UserAnswerActionConsts", () => {
  it("should have to Match Snapshot", () => {
    expect(UserAnswerActionConsts).toMatchSnapshot();
  });
});
