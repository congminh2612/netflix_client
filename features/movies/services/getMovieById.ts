import { axiosInstance } from "@/services";

export const getMovieById = async (id?: string | string[]) => {
  try {
    const res = await axiosInstance.get(`api/movie/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
