import Layout from "@/components/home/Layout";
import ProtectedRoute from "@/features/auth/ProtectedRoute";
import { getListMovies } from "@/features/list/services/getList";
import MoviesList from "@/features/movies/components/MoviesList";
import { ListType } from "@/types/typeList";
import { QueryClient, dehydrate, useQuery } from "react-query";
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
  const { data } = useQuery<ListType[]>("list", getListMovies, {
    cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
    staleTime: 1000 * 60 * 1, // Use stale data for 1 minute
    refetchInterval: 1000 * 60 * 2, // Refetch data every 2 minutes
  });
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
