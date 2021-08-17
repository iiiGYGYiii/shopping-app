import userReducer, { setCurrentUser } from "./user.reducer";

describe("Test for the User Reducer", () => {
  test("For undefined state, returns a proper state", () => {
    const state = undefined;

    const newState = userReducer(state, {
      action: undefined,
    });

    expect(newState).toBeDefined();
    expect(newState).toHaveProperty("currentUser");
  });

  test("For defined state and no action, returns state", () => {
    const state = {
      currentUser: "Omar",
    };

    const newState = userReducer(state, { action: undefined });

    expect(newState).toBeDefined();
    expect(newState).toStrictEqual(state);
  });

  describe("User Reducer Action", () => {
    test("Set new current user", () => {
      const currentUser = {
        currentUser: "Omarcito",
      };

      const action = setCurrentUser(currentUser);
      const newState = userReducer(undefined, action);

      expect(newState).toEqual(currentUser);
    });
  });
});
