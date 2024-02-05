import { configureStore, combineReducers } from "@reduxjs/toolkit";
const memberSlice = require("./slice/memberSlice").default;

const rootReducer = combineReducers({
    memberSlice: memberSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;