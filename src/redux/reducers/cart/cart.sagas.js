import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import { userActionTypes } from "../user/user.reducer";
import { clearCartAction } from "./cart.reducer";

export function* clearCartOnLogOut() {
  yield put(clearCartAction);
}

export function* onLogOutSuccess() {
  yield takeLatest(userActionTypes.LOG_OUT_SUCCESS, clearCartOnLogOut);
}

export default function* cartSagas() {
  yield all([call(onLogOutSuccess)]);
}
