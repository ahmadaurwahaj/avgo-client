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
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setIsSignedUp: (state, action) => {
      state.isSignup = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setBio: (state, action) => {
      state.bio = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setIsLogout: (state, action) => {
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
      state.id = "0";
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
  setIsLoggedIn,
  setIsSignedUp,
  setName,
  setEmail,
  setBio,
  setCountry,
  setAge,
  setGender,
  setIsLogout,
  updateSignUpInfo,
  updateLoginInfo,
  clearUser,
} = userSlice.actions;

// export const selectUser = (state) => state.user;

export default userSlice.reducer;
