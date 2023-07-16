import axios from "./axios";

export const getMessages = async (id, receiverId) => {
  try {
    const response = await axios.get(
      `api/v1/chat/getChats/${receiverId}/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Getting Message failed");
  }
};
