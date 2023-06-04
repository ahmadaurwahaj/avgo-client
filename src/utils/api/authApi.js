import axios from "./axios";

export const signup = async user => {
  try {
    const response = await axios.post(`/api/v1/users/signup`, user);
    return response.data;
  } catch (error) {
    throw new Error("Signup failed");
  }
};

export const signup2 = async user => {
  console.log("🚀 ~ file: authApi.js:14 ~ signup2 ~ user:", user);
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token}`
    };

    const response = await axios.put(
      `/api/v1/users/${user.id}`,
      { ...user, type: "signup" },
      {
        headers
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Signup failed");
  }
};

export const login = async user => {
  try {
    const response = await axios.post("/api/v1/users/login", user);
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};
