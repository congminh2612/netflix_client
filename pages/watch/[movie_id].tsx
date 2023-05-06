import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { QueryClient, useQuery, dehydrate } from "react-query";
import { getMovieById } from "@/features/movies/services/getMovieById";
import { MovieType } from "@/types/typeMovie";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { movie_id } = context.query;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["movie", movie_id], () =>
    getMovieById(movie_id)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
const Watch = () => {
  const router = useRouter();
  const { movie_id } = router.query;

  const { data, isLoading } = useQuery<MovieType>(["movie", movie_id], () =>
    getMovieById(movie_id)
  );
  if (isLoading) {
    return <h1>Loading ....</h1>;
  }
  return (
    <div>
      <video
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        className="w-full h-[100vh] object-cover "
        muted
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Watch;
