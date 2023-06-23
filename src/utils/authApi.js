import axios from "./axios";
import { useSelector } from "react-redux";

export const signup = async (user) => {
  try {
    const response = await axios.post(`/api/v1/users/signup`, user);
    return response.data;
  } catch (error) {
    throw new Error("Signup failed");
  }
};

export const signup2 = async (user) => {
  try {
    const token = useSelector((state) => state?.auth?.token);
    console.log("🚀 ~ file: authApi.js:20 ~ signup2 ~ token:", token);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.post(`/api/v1/users/${user.id}`, user, {
      headers,
    });

    return response.data;
  } catch (error) {
    throw new Error("Signup failed");
  }
};

export const login = async (user) => {
  try {
    const response = await axios.post("/api/v1/users/login", user);
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

// const API_BASE_URL = "http://localhost:8000";

// export const signup = async (user) => {
//   const response = await fetch(`${API_BASE_URL}/api/v1/users/signup`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });

//   if (!response.ok) {
//     throw new Error("Signup failed");
//   }

//   return response.json();
// };

// export const signup2 = async (user) => {
//   const response = await fetch(`${API_BASE_URL}/api/v1/users/${user.id}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });

//   if (!response.ok) {
//     throw new Error("Signup failed");
//   }

//   return response.json();
// };

// export const login = async (user) => {
//   const response = await fetch(`${API_BASE_URL}/api/v1/users/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });

//   if (!response.ok) {
//     throw new Error("Login failed");
//   }

//   return response.json();
// };
