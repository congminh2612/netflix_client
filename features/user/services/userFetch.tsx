import { axiosInstance } from "@/services";
import { AxiosHeaders } from "axios";

export const getAllUser = async (accessToken?: string | null) => {
  try {
    const allUser = await axiosInstance.get("api/user/all_user", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return allUser.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
