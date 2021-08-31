import rootReducer from "./root.reducer";

describe("Test root reducer.", () => {
  describe("User Reducer", () => {
    test("Root Reducer contains state of User Reducer", () => {
      const state = rootReducer(undefined, { type: undefined });
      expect(state).toHaveProperty("user");
    });

    test("Root Reducer contains state of Directory Reducer", () => {
      const state = rootReducer(undefined, { type: undefined });

      expect(state).toHaveProperty("directory");
    });
  });
});
