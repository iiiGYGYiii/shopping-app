import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import rootReducer from "./root.reducer";

const store = createStore(rootReducer, composeWithDevTools());
export const persistedStore = persistStore(store);

export default store;
