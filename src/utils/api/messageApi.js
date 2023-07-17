import axios from "./axios";

export const getMessages = async (id) => {
  console.log(id);
  try {
    const response = await axios.get(`api/v1/chat/getChats/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Getting Message failed");
  }
};
