import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // message: "Hi, message from this side",
  message: {
    _id: "64b36dd7d58969a4e087c0d7",
    sender: "6495820c474d76fe17847e3b",
    receiver: "6485b19dab14349903a50042",
    message: "HELLO",
    createdAt: "2023-07-16T04:11:03.756Z",
    updatedAt: "2023-07-16T04:11:03.756Z",
    __v: 0,
  },
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { updateMessage } = messageSlice.actions;

export default messageSlice.reducer;
