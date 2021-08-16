import cartReducer, { addItemAction } from "./cart.reducer";
import { SHOP_DATA } from "../../pages/Shop/Shop.data";

describe("Test for Cart Reducer", () => {
  test("Empty state returns a proper state", () => {
    const state = undefined;

    const newState = cartReducer(state, { type: undefined });

    expect(newState).toBeDefined();
  });
  test("Initial state is empty array", () => {
    const state = undefined;

    const newState = cartReducer(state, { type: undefined });

    expect(newState).toBeDefined();
    expect(newState).toHaveLength(0);
  });

  describe("Test for Cart Actions", () => {
    test("Add Item action adds item to state", () => {
      const state = cartReducer([], { type: undefined });
      const item = SHOP_DATA[0].items[2];

      const newState = cartReducer(state, addItemAction(item));

      expect(newState).toContainEqual({
        ...item,
        qty: 1,
      });
      expect(newState).toHaveLength(1);
    });

    test("Test for adding same item multiple times, not to duplicate, but to increase qty", () => {
      const item = SHOP_DATA[0].items[2];
      const state = cartReducer([], { type: undefined });

      const preState = cartReducer(state, addItemAction(item));
      const newState = cartReducer(preState, addItemAction(item));

      expect(newState).toHaveLength(1);
      expect(newState).toContainEqual({
        ...preState[0],
        qty: preState[0].qty + 1,
      });
    });
  });
});
