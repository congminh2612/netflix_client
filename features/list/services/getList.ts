import { axiosInstance } from "@/services";

export const getListMovies = async () => {
  try {
    const res = await axiosInstance.get("api/list/get-all");
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
