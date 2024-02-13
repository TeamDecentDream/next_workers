import { configureStore, combineReducers } from "@reduxjs/toolkit";
const authSlice = require("./features/auth/authSlice").default;

const rootReducer = combineReducers({
    authReducer: authSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;