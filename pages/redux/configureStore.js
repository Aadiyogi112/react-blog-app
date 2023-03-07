import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  //   const composeEnhancers=compose;// add support for redux dev tools
  // return createStore(
  //   rootReducer,
  //   initialState,
  //   composeEnhancers( applyMiddleware(reduxImmutableStateInvariant()))
  // );
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );

  return store;
}
