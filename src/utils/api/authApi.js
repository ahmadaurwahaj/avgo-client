import axios from "./axios";
import { useSelector } from "react-redux";

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
      { ...user, type: "EMAIL" },
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
