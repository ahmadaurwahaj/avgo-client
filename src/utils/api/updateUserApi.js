import axios from "./axios";

export const updateGeneralInfo = async (user) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    };

    const response = await axios.put(
      `/api/v1/users/${user.id}`,
      { ...user, type: "update" },
      { headers }
    );

    return response.data;
  } catch (error) {
    throw new Error("Update User failed");
  }
};

export const updatePassword = async (user) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    };

    const response = await axios.post(
      `/api/v1/users/resetPassword/${user.id}`,
      { ...user },
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Password Reset failed");
  }
};
