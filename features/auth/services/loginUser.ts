import { axiosInstance } from "@/services";
import { UserType } from "@/types/typeUser";

export const loginUser = async (userLogin: Omit<UserType, "username">) => {
  try {
    const res = await axiosInstance.post("api/auth/login", userLogin);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
