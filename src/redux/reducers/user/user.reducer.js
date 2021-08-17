const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user/SET_CURRENT_USER":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setCurrentUser = (currentUser) => ({
  type: "user/SET_CURRENT_USER",
  payload: currentUser,
});

export default userReducer;
