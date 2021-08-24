import { SHOP_DATA } from "../../../pages/Shop/Shop.data";

const SHOP_TYPES = {
  UPDATE_COLLECTIONS: "shop/UPDATE_COLLECTIONS",
};

const shopReducer = (state = SHOP_DATA, action) => {
  switch (action.type) {
    case SHOP_TYPES.UPDATE_COLLECTIONS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const updateCollections = (collectionsMap) => ({
  type: SHOP_TYPES.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export default shopReducer;
