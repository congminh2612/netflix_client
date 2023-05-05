import { axiosInstance } from "@/services";
import { MovieType } from "@/types/typeMovie";

export const getMovieBillBoard = async () => {
  try {
    const res = await axiosInstance.get("/api/movie/random");
    return res.data as MovieType;
  } catch (error: any) {
    throw new Error(error);
  }
};
