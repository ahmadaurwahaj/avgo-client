import axios from "./axios";

export const getFriendList = async (id) => {
  try {
    const response = await axios.get(`api/v1/friend/getFriends/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Get Friend List failed");
  }
};
