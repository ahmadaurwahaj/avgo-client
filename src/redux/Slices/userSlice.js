import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Temp/Asad",
  email: "",
  isLoggedIn: false,
  isSignup: false,
  bio: "",
  about: "",
  country: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setUser: (state, action) => {
      const { name, email, isLoggedIn, isSignedUp, bio, country } =
        action.payload;
      state.name = name;
      state.email = email;
      state.isLoggedIn = isLoggedIn;
      state.isSignedUp = isSignedUp;
      state.bio = bio;
      state.country = country;
    },
    clearUser: (state) => {
      state.name = "";
      state.email = "";
      state.isLoggedIn = false;
      state.isSignedUp = false;
      state.bio = "";
      state.country = "";
    },
  },
});

export const { setName, setIsLoggedIn, setUser, clearUser } = userSlice.actions;

// export const selectUser = (state) => state.user;

export default userSlice.reducer;
