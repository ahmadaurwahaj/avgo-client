import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friendsList: [],
};

const friendsSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    updateFriendsList: (state, action) => {
      state.friendsList = action.payload;
    },
  },
});

export const { updateFriendsList } = friendsSlice.actions;

export default friendsSlice.reducer;
