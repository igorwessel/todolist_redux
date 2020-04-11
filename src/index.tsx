import React from "react";
import ReactDOM from "react-dom";
import "./styles/normalize.css";
import "./styles/global.css";
import App from "components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "reducers/todos";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
