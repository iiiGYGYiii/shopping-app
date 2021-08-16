import cartReducer, {
  addItemAction,
  decreaseQtyAction,
  increaseQtyAction,
} from "./cart.reducer";
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

    test("Increase qty of item by 1", () => {
      const preState = cartReducer(
        undefined,
        addItemAction(SHOP_DATA[0].items[2])
      );

      const state = cartReducer(
        preState,
        increaseQtyAction(SHOP_DATA[0].items[2])
      );

      expect(state).toBeDefined();
      expect(state[0].qty).toBe(2);

      const newState = cartReducer(
        state,
        increaseQtyAction(SHOP_DATA[0].items[2])
      );

      expect(newState).toBeDefined();
      expect(newState[0].qty).toBe(3);
    });

    test("Decrease qty of item by 1", () => {
      const item = { ...SHOP_DATA[0].items[2], qty: 4 };
      const preState = [item];

      const state = cartReducer(
        preState,
        decreaseQtyAction(SHOP_DATA[0].items[2])
      );

      expect(state).toBeDefined();
      expect(state).toHaveLength(1);

      expect(state.find((c) => c.id === item.id).qty).toBe(item.qty - 1);
    });

    test("When qty is 0 remove item", () => {
      const item = { ...SHOP_DATA[0].items[2], qty: 1 };
      const state = [item];

      const newState = cartReducer(
        state,
        decreaseQtyAction(SHOP_DATA[0].items[2])
      );

      expect(newState).toHaveLength(0);
    });
  });
});
