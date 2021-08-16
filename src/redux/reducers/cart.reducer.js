import { addItemToCart } from "./utils";

const initialState = [];

const actions = {
  ADD_ITEM: "cart/ADD_ITEM",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return addItemToCart(state, action.payload);
    default:
      return state;
  }
};

/**
 * Action
 * @param {Object} item item to add to our cart state
 * @returns Object with type of add item and payload of item given
 */
export const addItemAction = (item) => ({
  type: actions.ADD_ITEM,
  payload: item,
});

export default cartReducer;
