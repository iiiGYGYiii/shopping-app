import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../../services/firebase.utils";

import {
  userActionTypes,
  googleLogInSuccess,
  googleLogInFailure,
} from "./user.reducer";

export function* logInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleLogInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(googleLogInFailure(error.message));
  }
}

export function* onGoogleLogInStart() {
  yield takeLatest(userActionTypes.GOOGLE_LOG_IN_START, logInWithGoogle);
}

export default function* userSagas() {
  yield all([call(onGoogleLogInStart)]);
}
