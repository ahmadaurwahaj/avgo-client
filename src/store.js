import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "./redux/Slices/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  // more reducers here
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(queryClient.middleware),
});

// setupListeners(store.dispatch);
