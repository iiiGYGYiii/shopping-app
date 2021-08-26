import { takeLatest, call, put } from "@redux-saga/core/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../../services/firebase.utils";

import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
  SHOP_TYPES,
} from "./shop.reducer";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(SHOP_TYPES.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
