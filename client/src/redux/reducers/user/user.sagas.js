import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../../services/firebase.utils";

import {
  userActionTypes,
  logInSuccess,
  logInFailure,
  logOutSuccess,
  logOutFail,
} from "./user.reducer";

export function* getSnapshotFromUserAuth(userAuth, additionalData = {}) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(
      logInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(logInFailure(error.message));
  }
}

export function* logInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(logInFailure(error.message));
  }
}

export function* onGoogleLogInStart() {
  yield takeLatest(userActionTypes.GOOGLE_LOG_IN_START, logInWithGoogle);
}

export function* logInWithCredentials({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(logInFailure(error.message));
  }
}

export function* onEmailLogInStart() {
  yield takeLatest(userActionTypes.EMAIL_LOG_IN_START, logInWithCredentials);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(logInFailure(error.message));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* logOut() {
  try {
    yield auth.signOut();
    yield put(logOutSuccess);
  } catch (error) {
    yield put(logOutFail(error.message));
  }
}

export function* onLogOutStart() {
  yield takeLatest(userActionTypes.LOG_OUT_START, logOut);
}

export function* signUpWithCredentials({
  payload: { password, email, displayName },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user, { displayName });
  } catch (error) {
    yield put(logInFailure(error.message));
  }
}

export function* onSignInStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpWithCredentials);
}

export default function* userSagas() {
  yield all([
    call(onGoogleLogInStart),
    call(onEmailLogInStart),
    call(onCheckUserSession),
    call(onLogOutStart),
    call(onSignInStart),
  ]);
}
