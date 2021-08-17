import { combineReducers } from "redux";

import userReducer from "./reducers/user.reducer";
import cartReducer from "./reducers/cart.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
