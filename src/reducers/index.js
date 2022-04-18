import { combineReducers } from "redux";

import restaurantReducer from "../pages/restaurant/reducers";

const reducers = {
  restaurant: restaurantReducer,
};

export const rootReducer = combineReducers(reducers);
