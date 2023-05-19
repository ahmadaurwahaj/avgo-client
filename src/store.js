import { configureStore } from "@reduxjs/toolkit";
import UserLoginSlice from "./redux/Slices/UserLoginSlice";

export const store = configureStore({
  reducer: {
    userLogin: UserLoginSlice,
  },
});
