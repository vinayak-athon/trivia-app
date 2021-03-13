import { Http } from ".";

describe("Http request", () => {
  test("success", async () => {
    const result = await Http.Request<{ success: boolean }>("GET", "/success");
    expect(result.success).toEqual(true);
  });

  test("not-found", async () => {
    try {
      await Http.Request("GET", "/not-found");
    } catch (error) {
      expect(error.status).toEqual(404);
    }
  });
});
