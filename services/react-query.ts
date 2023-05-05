import { DefaultOptions, QueryClient, QueryKey } from "react-query";
import { axiosInstance } from "./axios.config";
import { AxiosRequestConfig } from "axios";

const defaultFn = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [endpoint, params, options] = queryKey as Array<
    string | Record<string, unknown>
  >;

  const res = await axiosInstance.get(endpoint as string, {
    params,
    ...(options as AxiosRequestConfig),
  });

  return res?.data;
};

const queryConfig: DefaultOptions = {
  queries: {
    queryFn: defaultFn,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
