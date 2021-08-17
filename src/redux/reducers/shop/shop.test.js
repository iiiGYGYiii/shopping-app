import shopReducer from "./shop.reducer";

describe("Shop Reducer", () => {
  test("Returns proper state when no state is given", () => {
    const state = shopReducer(undefined, { type: undefined });

    expect(state).toBeDefined();
  });
});
