import { axiosInstance } from "@/services";

export const getMovieByList = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`api/list/movies/${slug}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
