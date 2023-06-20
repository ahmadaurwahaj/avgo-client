import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "0",
  name: "",
  email: "",
  isLoggedIn: false,
  isSignup: false,
  bio: "",
  country: "",
  age: 0,
  gender: "",
  isLogout: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    updateIsSignedUp: (state, action) => {
      state.isSignup = action.payload;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateBio: (state, action) => {
      state.bio = action.payload;
    },
    updateCountry: (state, action) => {
      state.country = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
    updateGender: (state, action) => {
      state.gender = action.payload;
    },
    updateIsLogout: (state, action) => {
      state.isLogout = action.payload;
    },

    updateSignUpInfo: (state, action) => {
      const { bio, age, country, gender } = action.payload;
      state.bio = bio;
      state.age = age;
      state.country = country;
      state.gender = gender;
      state.isLogout = false;
    },

    updateLoginInfo: (state, action) => {
      const { _id, user_name, email, bio, age, country, gender } =
        action.payload;
      state.id = _id;
      state.name = user_name;
      state.email = email;
      state.bio = bio;
      state.age = age;
      state.country = country;
      state.gender = gender;
      state.isLoggedIn = true;
      state.isLogout = false;
    },

    clearUser: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.isLoggedIn = false;
      state.isSignup = false;
      state.bio = "";
      state.country = "";
      state.age = 0;
      state.gender = "";
      state.isLogout = true;
    },
  },
});

export const {
  updateIsLoggedIn,
  updateIsSignedUp,
  updateName,
  updateEmail,
  updateBio,
  updateCountry,
  updateAge,
  updateGender,
  updateIsLogout,
  updateSignUpInfo,
  updateLoginInfo,
  clearUser,
} = userSlice.actions;

// export const selectUser = (state) => state.user;

export default userSlice.reducer;
