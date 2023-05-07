import Layout from "@/components/home/Layout";
import ProtectedRoute from "@/features/auth/ProtectedRoute";
import { getListMovies } from "@/features/list/services/getList";
import MoviesList from "@/features/movies/components/MoviesList";
import { getAllUser } from "@/features/user/services/userFetch";
import { RootState } from "@/redux/store";
import { axiosInstance } from "@/services";
import { ListType } from "@/types/typeList";
import axios from "axios";
import { log } from "console";
import { QueryClient, dehydrate, useQuery } from "react-query";
import { useSelector } from "react-redux";
import useCurrentUser from "@/hooks/useCurrentUser";
export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("list", getListMovies);
  return {
    props: {
      data: dehydrate(queryClient),
    },
  };
}
export default function Home() {
  const { data } = useQuery<ListType[]>("list", getListMovies);
  return (
    <ProtectedRoute>
      <Layout>
        {data?.map((list) => {
          return (
            <MoviesList
              key={list._id}
              title={list.title}
              movies={list.movies}
            />
          );
        })}
      </Layout>
    </ProtectedRoute>
  );
}
