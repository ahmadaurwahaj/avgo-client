import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const UserLoginSlice = createSlice({
  name: "UserLoginSlice",
  initialState,
  reducers: {
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const {} = UserLoginSlice.actions;
export default UserLoginSlice.reducer;
