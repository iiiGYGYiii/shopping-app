import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./reducers/user.reducer";
import cartReducer from "./reducers/cart.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export default persistedRootReducer;
