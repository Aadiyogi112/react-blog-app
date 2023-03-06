import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";

// REDUX
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

const RootElement = () => {
  return (
    <ReduxProvider store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </ReduxProvider>
  );
};

export default RootElement;
