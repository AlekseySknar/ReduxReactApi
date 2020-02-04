import * as React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";

import MainContainer from "./components/mainContainer";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  );
}
