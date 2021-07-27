import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Header, Tiles, Footer } from "./components";
import "./App.css";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Tiles />
        <Footer />
      </div>
    </Provider>
  );
};
