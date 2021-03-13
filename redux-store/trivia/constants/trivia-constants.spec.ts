import { TriviaActionConsts } from ".";

describe("TriviaActionConsts", () => {
  it("should have to Match Snapshot", () => {
    expect(TriviaActionConsts).toMatchSnapshot();
  });
});
