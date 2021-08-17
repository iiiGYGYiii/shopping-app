import directoryReducer from "./directory.reducer";

describe("Directory Reducer", () => {
  test("When not initial state is given returns a proper state", () => {
    const state = directoryReducer(undefined, { type: undefined });
    expect(state).toBeDefined();
  });
});
