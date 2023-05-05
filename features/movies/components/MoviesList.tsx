import { MovieType } from "@/types/typeMovie";
import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";
import { useQuery } from "react-query";
import { list } from "postcss";
import { getMovieByList } from "@/features/list/services/getMovieByList";

interface MovieListProps {
  title: string;
  movies: MovieType[];
}

const MoviesList: React.FC<MovieListProps> = ({ title }) => {
  const { data } = useQuery<MovieType[]>(["movies", title], () =>
    getMovieByList(title)
  );

  console.log(data);
  return (
    <div className="px-12 mt-4 space-y-8 text-white text-lg font-medium">
      <p>{title}</p>
      <div className="grid grid-cols-6 gap-4">
        {data?.map((movie) => {
          return <MovieCard key={movie._id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MoviesList;
