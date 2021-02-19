import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store/index";
import { DragDropContext } from "react-beautiful-dnd";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DragDropContext>
        <App />
      </DragDropContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
