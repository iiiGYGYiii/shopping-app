import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store, { persistedStore } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

import "./index.scss";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
