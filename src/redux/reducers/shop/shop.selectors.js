import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector([selectShop], (shop) => shop);

export const selectCategoryIdItems = (categoryId) =>
  createSelector([selectShop], (shop) => shop[categoryId].items);
