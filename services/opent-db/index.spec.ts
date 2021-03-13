import { Opentdb } from "@Services";

describe("Opentdb", () => {
  test("success", async () => {
    const result = await Opentdb.Get({
      amount: 10,
      difficulty: "hard",
      type: "boolean",
    });
    expect(result.results).toHaveLength(10);
  });

  test("fail", async () => {
    const result = await Opentdb.Get({});
    expect(result.results).toHaveLength(0);
  });
});
