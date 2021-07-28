import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { TilesGame } from "./components";
import "./App.css";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TilesGame />
      </div>
    </Provider>
  );
};
