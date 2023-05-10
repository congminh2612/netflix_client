import axios from "axios";

export const refreshToken = async () => {
  try {
    const res = await axios.post("api/auth/refresh", {
      credentials: "include",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
