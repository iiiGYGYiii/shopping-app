import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./reducers/shop/shop.sagas";
import userSagas from "./reducers/user/user.sagas";
import cartSagas from "./reducers/cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
}
