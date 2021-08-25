const initialState = {
  currentUser: null,
  error: null,
};

export const userActionTypes = {
  SET_CURRENT_USER: "user/SET_CURRENT_USER",
  GOOGLE_LOG_IN_START: "user/GOOGLE_LOG_IN_START",
  GOOGLE_LOG_IN_SUCCESS: "user/GOOGLE_LOG_IN_SUCCESS",
  GOOGLE_LOG_IN_FAIL: "user/GOOGLE_LOG_IN_FAIL",
  EMAIL_LOG_IN_START: "user/EMAIL_LOG_IN_START",
  EMAIL_LOG_IN_SUCCESS: "user/EMAIL_LOG_IN_SUCCESS",
  EMAIL_LOG_IN_FAIL: "user/EMAIL_LOG_IN_FAIL",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.EMAIL_LOG_IN_SUCCESS:
    case userActionTypes.GOOGLE_LOG_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActionTypes.EMAIL_LOG_IN_FAIL:
    case userActionTypes.GOOGLE_LOG_IN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const setCurrentUser = (currentUser) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: currentUser,
});

export const googleLogInStart = () => ({
  type: userActionTypes.GOOGLE_LOG_IN_START,
});

export const googleLogInSuccess = (user) => ({
  type: userActionTypes.GOOGLE_LOG_IN_SUCCESS,
  payload: user,
});

export const googleLogInFailure = (error) => ({
  type: userActionTypes.GOOGLE_LOG_IN_FAIL,
  payload: error,
});

export const emailLogInStart = (credentials) => ({
  type: userActionTypes.EMAIL_LOG_IN_START,
  payload: credentials,
});

export const emailLogInSuccess = (user) => ({
  type: userActionTypes.EMAIL_LOG_IN_SUCCESS,
  payload: user,
});

export const emailLogInFailure = (error) => ({
  type: userActionTypes.EMAIL_LOG_IN_FAIL,
  payload: error,
});

export default userReducer;
