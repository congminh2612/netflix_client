import axios from "axios";

export const refreshToken = async () => {
  try {
    const res = await axios.post("api/auth/refresh", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
