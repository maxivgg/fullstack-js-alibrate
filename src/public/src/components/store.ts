import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/index";

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
);
