import React from "react";
import ReactDOM from "react-dom";
import "./styles/normalize.css";
import "./styles/global.css";
import App from "components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "reducers";

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
