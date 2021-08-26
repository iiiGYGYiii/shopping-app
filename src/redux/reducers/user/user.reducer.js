const initialState = {
  currentUser: null,
  error: null,
};

export const userActionTypes = {
  GOOGLE_LOG_IN_START: "user/GOOGLE_LOG_IN_START",
  EMAIL_LOG_IN_START: "user/EMAIL_LOG_IN_START",
  LOG_IN_SUCCESS: "user/LOG_IN_SUCCESS",
  LOG_IN_FAIL: "user/LOG_IN_FAIL",
  CHECK_USER_SESSION: "user/CHECK_USER_SESSION",
  LOG_OUT_START: "user/LOG_OUT_START",
  LOG_OUT_SUCCESS: "user/LOG_OUT_SUCCESS",
  LOG_OUT_FAIL: "user/LOG_OUT_FAIL",
  SIGN_UP_START: "user/SIGN_UP_START",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActionTypes.LOG_IN_FAIL:
    case userActionTypes.LOG_OUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case userActionTypes.LOG_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};

export const googleLogInStart = () => ({
  type: userActionTypes.GOOGLE_LOG_IN_START,
});

export const emailLogInStart = (credentials) => ({
  type: userActionTypes.EMAIL_LOG_IN_START,
  payload: credentials,
});

export const logInSuccess = (user) => ({
  type: userActionTypes.LOG_IN_SUCCESS,
  payload: user,
});

export const logInFailure = (error) => ({
  type: userActionTypes.LOG_IN_FAIL,
  payload: error,
});

export const checkUserSession = {
  type: userActionTypes.CHECK_USER_SESSION,
};

export const logOutStart = {
  type: userActionTypes.LOG_OUT_START,
};

export const logOutSuccess = {
  type: userActionTypes.LOG_OUT_SUCCESS,
};

export const logOutFail = (error) => ({
  type: userActionTypes.LOG_OUT_FAIL,
  payload: error,
});

export const signUpStart = (credentials) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: credentials,
});

export default userReducer;
