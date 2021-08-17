import { addItemToCart, increaseItemQty, decreaseItemQty } from "../utils";

const initialState = [];

const actions = {
  ADD_ITEM: "cart/ADD_ITEM",
  INCREASE_ITEM_QTY: "cart/INCREASE_ITEM_QTY",
  DECREASE_ITEM_QTY: "cart/DECREASE_ITEM_QTY",
  REMOVE_ITEM: "cart/REMOVE_ITEM",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return addItemToCart(state, action.payload);
    case actions.INCREASE_ITEM_QTY:
      return increaseItemQty(state, action.payload);
    case actions.DECREASE_ITEM_QTY:
      return decreaseItemQty(state, action.payload);
    case actions.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);
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

export const increaseQtyAction = (item) => ({
  type: actions.INCREASE_ITEM_QTY,
  payload: item,
});

export const decreaseQtyAction = (item) => ({
  type: actions.DECREASE_ITEM_QTY,
  payload: item,
});

export const removeItemAction = (id) => ({
  type: actions.REMOVE_ITEM,
  payload: id,
});

export default cartReducer;
