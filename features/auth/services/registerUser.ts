import { axiosInstance } from "@/services";
import { UserType } from "@/types/typeUser";
import { AxiosError } from "axios";

export const registerUser = async (userData: UserType) => {
  try {
    const response = await axiosInstance.post("/api/auth/register", userData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
