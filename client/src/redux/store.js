import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import rootReducer from "./root.reducer";

import rootSaga from "./saga.root";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...[sagaMiddleware]))
);

sagaMiddleware.run(rootSaga);

export const persistedStore = persistStore(store);

export default store;
