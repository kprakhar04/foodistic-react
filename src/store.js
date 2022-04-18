import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import { rootReducer as reducers } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
